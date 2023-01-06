package shared

import (
	"time"
)

// LinksResponseJSONAPI
// An object describing the server's implementation
type LinksResponseJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// LinksResponseToplevelLinks
// A set of Links objects, possibly including pagination
type LinksResponseToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// LinksResponseResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type LinksResponseResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// LinksResponseResponseMetaImplementation
// Information on the server implementation
type LinksResponseResponseMetaImplementation struct {
	Homepage     *interface{}                                                     `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                     `json:"issue_tracker,omitempty"`
	Maintainer   *LinksResponseResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                          `json:"name,omitempty"`
	SourceURL    *interface{}                                                     `json:"source_url,omitempty"`
	Version      *string                                                          `json:"version,omitempty"`
}

// LinksResponseResponseMetaProvider
// Information on the database provider of the implementation.
type LinksResponseResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// LinksResponseResponseMetaResponseMetaQuery
// Information on the query that was requested.
type LinksResponseResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// LinksResponseResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type LinksResponseResponseMeta struct {
	APIVersion        string                                     `json:"api_version"`
	DataAvailable     *int64                                     `json:"data_available,omitempty"`
	DataReturned      *int64                                     `json:"data_returned,omitempty"`
	Implementation    *LinksResponseResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                    `json:"last_id,omitempty"`
	MoreDataAvailable bool                                       `json:"more_data_available"`
	Provider          *LinksResponseResponseMetaProvider         `json:"provider,omitempty"`
	Query             LinksResponseResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                    `json:"response_message,omitempty"`
	Schema            *interface{}                               `json:"schema,omitempty"`
	TimeStamp         *time.Time                                 `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                 `json:"warnings,omitempty"`
}

// LinksResponse
// errors are not allowed
type LinksResponse struct {
	Data     interface{}                 `json:"data"`
	Errors   []Error                     `json:"errors,omitempty"`
	Included *interface{}                `json:"included,omitempty"`
	Jsonapi  *LinksResponseJSONAPI       `json:"jsonapi,omitempty"`
	Links    *LinksResponseToplevelLinks `json:"links,omitempty"`
	Meta     LinksResponseResponseMeta   `json:"meta"`
}
