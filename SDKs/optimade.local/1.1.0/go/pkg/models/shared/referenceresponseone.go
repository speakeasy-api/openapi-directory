package shared

import (
	"time"
)

// ReferenceResponseOneJSONAPI
// An object describing the server's implementation
type ReferenceResponseOneJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// ReferenceResponseOneToplevelLinks
// A set of Links objects, possibly including pagination
type ReferenceResponseOneToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// ReferenceResponseOneResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type ReferenceResponseOneResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// ReferenceResponseOneResponseMetaImplementation
// Information on the server implementation
type ReferenceResponseOneResponseMetaImplementation struct {
	Homepage     *interface{}                                                            `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                            `json:"issue_tracker,omitempty"`
	Maintainer   *ReferenceResponseOneResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                                 `json:"name,omitempty"`
	SourceURL    *interface{}                                                            `json:"source_url,omitempty"`
	Version      *string                                                                 `json:"version,omitempty"`
}

// ReferenceResponseOneResponseMetaProvider
// Information on the database provider of the implementation.
type ReferenceResponseOneResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// ReferenceResponseOneResponseMetaResponseMetaQuery
// Information on the query that was requested.
type ReferenceResponseOneResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// ReferenceResponseOneResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type ReferenceResponseOneResponseMeta struct {
	APIVersion        string                                            `json:"api_version"`
	DataAvailable     *int64                                            `json:"data_available,omitempty"`
	DataReturned      *int64                                            `json:"data_returned,omitempty"`
	Implementation    *ReferenceResponseOneResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                           `json:"last_id,omitempty"`
	MoreDataAvailable bool                                              `json:"more_data_available"`
	Provider          *ReferenceResponseOneResponseMetaProvider         `json:"provider,omitempty"`
	Query             ReferenceResponseOneResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                           `json:"response_message,omitempty"`
	Schema            *interface{}                                      `json:"schema,omitempty"`
	TimeStamp         *time.Time                                        `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                        `json:"warnings,omitempty"`
}

// ReferenceResponseOne
// errors are not allowed
type ReferenceResponseOne struct {
	Data     interface{}                        `json:"data"`
	Errors   []Error                            `json:"errors,omitempty"`
	Included *interface{}                       `json:"included,omitempty"`
	Jsonapi  *ReferenceResponseOneJSONAPI       `json:"jsonapi,omitempty"`
	Links    *ReferenceResponseOneToplevelLinks `json:"links,omitempty"`
	Meta     ReferenceResponseOneResponseMeta   `json:"meta"`
}
