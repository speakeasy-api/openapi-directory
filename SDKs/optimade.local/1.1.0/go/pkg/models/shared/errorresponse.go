package shared

import (
	"time"
)

// ErrorResponseJSONAPI
// An object describing the server's implementation
type ErrorResponseJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// ErrorResponseToplevelLinks
// A set of Links objects, possibly including pagination
type ErrorResponseToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// ErrorResponseResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type ErrorResponseResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// ErrorResponseResponseMetaImplementation
// Information on the server implementation
type ErrorResponseResponseMetaImplementation struct {
	Homepage     *interface{}                                                     `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                     `json:"issue_tracker,omitempty"`
	Maintainer   *ErrorResponseResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                          `json:"name,omitempty"`
	SourceURL    *interface{}                                                     `json:"source_url,omitempty"`
	Version      *string                                                          `json:"version,omitempty"`
}

// ErrorResponseResponseMetaProvider
// Information on the database provider of the implementation.
type ErrorResponseResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// ErrorResponseResponseMetaResponseMetaQuery
// Information on the query that was requested.
type ErrorResponseResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// ErrorResponseResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type ErrorResponseResponseMeta struct {
	APIVersion        string                                     `json:"api_version"`
	DataAvailable     *int64                                     `json:"data_available,omitempty"`
	DataReturned      *int64                                     `json:"data_returned,omitempty"`
	Implementation    *ErrorResponseResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                    `json:"last_id,omitempty"`
	MoreDataAvailable bool                                       `json:"more_data_available"`
	Provider          *ErrorResponseResponseMetaProvider         `json:"provider,omitempty"`
	Query             ErrorResponseResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                    `json:"response_message,omitempty"`
	Schema            *interface{}                               `json:"schema,omitempty"`
	TimeStamp         *time.Time                                 `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                 `json:"warnings,omitempty"`
}

// ErrorResponse
// errors MUST be present and data MUST be skipped
type ErrorResponse struct {
	Data     *interface{}                `json:"data,omitempty"`
	Errors   []OptimadeError             `json:"errors"`
	Included []Resource                  `json:"included,omitempty"`
	Jsonapi  *ErrorResponseJSONAPI       `json:"jsonapi,omitempty"`
	Links    *ErrorResponseToplevelLinks `json:"links,omitempty"`
	Meta     ErrorResponseResponseMeta   `json:"meta"`
}
