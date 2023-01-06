package shared

import (
	"time"
)

// ReferenceResponseManyJSONAPI
// An object describing the server's implementation
type ReferenceResponseManyJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// ReferenceResponseManyToplevelLinks
// A set of Links objects, possibly including pagination
type ReferenceResponseManyToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// ReferenceResponseManyResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type ReferenceResponseManyResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// ReferenceResponseManyResponseMetaImplementation
// Information on the server implementation
type ReferenceResponseManyResponseMetaImplementation struct {
	Homepage     *interface{}                                                             `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                             `json:"issue_tracker,omitempty"`
	Maintainer   *ReferenceResponseManyResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                                  `json:"name,omitempty"`
	SourceURL    *interface{}                                                             `json:"source_url,omitempty"`
	Version      *string                                                                  `json:"version,omitempty"`
}

// ReferenceResponseManyResponseMetaProvider
// Information on the database provider of the implementation.
type ReferenceResponseManyResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// ReferenceResponseManyResponseMetaResponseMetaQuery
// Information on the query that was requested.
type ReferenceResponseManyResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// ReferenceResponseManyResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type ReferenceResponseManyResponseMeta struct {
	APIVersion        string                                             `json:"api_version"`
	DataAvailable     *int64                                             `json:"data_available,omitempty"`
	DataReturned      *int64                                             `json:"data_returned,omitempty"`
	Implementation    *ReferenceResponseManyResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                            `json:"last_id,omitempty"`
	MoreDataAvailable bool                                               `json:"more_data_available"`
	Provider          *ReferenceResponseManyResponseMetaProvider         `json:"provider,omitempty"`
	Query             ReferenceResponseManyResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                            `json:"response_message,omitempty"`
	Schema            *interface{}                                       `json:"schema,omitempty"`
	TimeStamp         *time.Time                                         `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                         `json:"warnings,omitempty"`
}

// ReferenceResponseMany
// errors are not allowed
type ReferenceResponseMany struct {
	Data     interface{}                         `json:"data"`
	Errors   []Error                             `json:"errors,omitempty"`
	Included *interface{}                        `json:"included,omitempty"`
	Jsonapi  *ReferenceResponseManyJSONAPI       `json:"jsonapi,omitempty"`
	Links    *ReferenceResponseManyToplevelLinks `json:"links,omitempty"`
	Meta     ReferenceResponseManyResponseMeta   `json:"meta"`
}
