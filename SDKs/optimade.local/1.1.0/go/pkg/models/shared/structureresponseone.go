package shared

import (
	"time"
)

// StructureResponseOneJSONAPI
// An object describing the server's implementation
type StructureResponseOneJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// StructureResponseOneToplevelLinks
// A set of Links objects, possibly including pagination
type StructureResponseOneToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// StructureResponseOneResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type StructureResponseOneResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// StructureResponseOneResponseMetaImplementation
// Information on the server implementation
type StructureResponseOneResponseMetaImplementation struct {
	Homepage     *interface{}                                                            `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                            `json:"issue_tracker,omitempty"`
	Maintainer   *StructureResponseOneResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                                 `json:"name,omitempty"`
	SourceURL    *interface{}                                                            `json:"source_url,omitempty"`
	Version      *string                                                                 `json:"version,omitempty"`
}

// StructureResponseOneResponseMetaProvider
// Information on the database provider of the implementation.
type StructureResponseOneResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// StructureResponseOneResponseMetaResponseMetaQuery
// Information on the query that was requested.
type StructureResponseOneResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// StructureResponseOneResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type StructureResponseOneResponseMeta struct {
	APIVersion        string                                            `json:"api_version"`
	DataAvailable     *int64                                            `json:"data_available,omitempty"`
	DataReturned      *int64                                            `json:"data_returned,omitempty"`
	Implementation    *StructureResponseOneResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                           `json:"last_id,omitempty"`
	MoreDataAvailable bool                                              `json:"more_data_available"`
	Provider          *StructureResponseOneResponseMetaProvider         `json:"provider,omitempty"`
	Query             StructureResponseOneResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                           `json:"response_message,omitempty"`
	Schema            *interface{}                                      `json:"schema,omitempty"`
	TimeStamp         *time.Time                                        `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                        `json:"warnings,omitempty"`
}

// StructureResponseOne
// errors are not allowed
type StructureResponseOne struct {
	Data     interface{}                        `json:"data"`
	Errors   []Error                            `json:"errors,omitempty"`
	Included *interface{}                       `json:"included,omitempty"`
	Jsonapi  *StructureResponseOneJSONAPI       `json:"jsonapi,omitempty"`
	Links    *StructureResponseOneToplevelLinks `json:"links,omitempty"`
	Meta     StructureResponseOneResponseMeta   `json:"meta"`
}
