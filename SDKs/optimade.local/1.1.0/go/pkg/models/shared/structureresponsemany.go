package shared

import (
	"time"
)

// StructureResponseManyJSONAPI
// An object describing the server's implementation
type StructureResponseManyJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// StructureResponseManyToplevelLinks
// A set of Links objects, possibly including pagination
type StructureResponseManyToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// StructureResponseManyResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type StructureResponseManyResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// StructureResponseManyResponseMetaImplementation
// Information on the server implementation
type StructureResponseManyResponseMetaImplementation struct {
	Homepage     *interface{}                                                             `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                             `json:"issue_tracker,omitempty"`
	Maintainer   *StructureResponseManyResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                                  `json:"name,omitempty"`
	SourceURL    *interface{}                                                             `json:"source_url,omitempty"`
	Version      *string                                                                  `json:"version,omitempty"`
}

// StructureResponseManyResponseMetaProvider
// Information on the database provider of the implementation.
type StructureResponseManyResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// StructureResponseManyResponseMetaResponseMetaQuery
// Information on the query that was requested.
type StructureResponseManyResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// StructureResponseManyResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type StructureResponseManyResponseMeta struct {
	APIVersion        string                                             `json:"api_version"`
	DataAvailable     *int64                                             `json:"data_available,omitempty"`
	DataReturned      *int64                                             `json:"data_returned,omitempty"`
	Implementation    *StructureResponseManyResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                            `json:"last_id,omitempty"`
	MoreDataAvailable bool                                               `json:"more_data_available"`
	Provider          *StructureResponseManyResponseMetaProvider         `json:"provider,omitempty"`
	Query             StructureResponseManyResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                            `json:"response_message,omitempty"`
	Schema            *interface{}                                       `json:"schema,omitempty"`
	TimeStamp         *time.Time                                         `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                         `json:"warnings,omitempty"`
}

// StructureResponseMany
// errors are not allowed
type StructureResponseMany struct {
	Data     interface{}                         `json:"data"`
	Errors   []Error                             `json:"errors,omitempty"`
	Included *interface{}                        `json:"included,omitempty"`
	Jsonapi  *StructureResponseManyJSONAPI       `json:"jsonapi,omitempty"`
	Links    *StructureResponseManyToplevelLinks `json:"links,omitempty"`
	Meta     StructureResponseManyResponseMeta   `json:"meta"`
}
