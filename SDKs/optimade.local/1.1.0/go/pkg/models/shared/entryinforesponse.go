package shared

import (
	"time"
)

// EntryInfoResponseEntryInfoResource
// OPTIMADE information for an entry endpoint
type EntryInfoResponseEntryInfoResource struct {
	Description          string                       `json:"description"`
	Formats              []string                     `json:"formats"`
	OutputFieldsByFormat map[string][]string          `json:"output_fields_by_format"`
	Properties           map[string]EntryInfoProperty `json:"properties"`
}

// EntryInfoResponseJSONAPI
// An object describing the server's implementation
type EntryInfoResponseJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// EntryInfoResponseToplevelLinks
// A set of Links objects, possibly including pagination
type EntryInfoResponseToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// EntryInfoResponseResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type EntryInfoResponseResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// EntryInfoResponseResponseMetaImplementation
// Information on the server implementation
type EntryInfoResponseResponseMetaImplementation struct {
	Homepage     *interface{}                                                         `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                         `json:"issue_tracker,omitempty"`
	Maintainer   *EntryInfoResponseResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                              `json:"name,omitempty"`
	SourceURL    *interface{}                                                         `json:"source_url,omitempty"`
	Version      *string                                                              `json:"version,omitempty"`
}

// EntryInfoResponseResponseMetaProvider
// Information on the database provider of the implementation.
type EntryInfoResponseResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// EntryInfoResponseResponseMetaResponseMetaQuery
// Information on the query that was requested.
type EntryInfoResponseResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// EntryInfoResponseResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type EntryInfoResponseResponseMeta struct {
	APIVersion        string                                         `json:"api_version"`
	DataAvailable     *int64                                         `json:"data_available,omitempty"`
	DataReturned      *int64                                         `json:"data_returned,omitempty"`
	Implementation    *EntryInfoResponseResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                        `json:"last_id,omitempty"`
	MoreDataAvailable bool                                           `json:"more_data_available"`
	Provider          *EntryInfoResponseResponseMetaProvider         `json:"provider,omitempty"`
	Query             EntryInfoResponseResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                        `json:"response_message,omitempty"`
	Schema            *interface{}                                   `json:"schema,omitempty"`
	TimeStamp         *time.Time                                     `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                     `json:"warnings,omitempty"`
}

// EntryInfoResponse
// errors are not allowed
type EntryInfoResponse struct {
	Data     EntryInfoResponseEntryInfoResource `json:"data"`
	Errors   []Error                            `json:"errors,omitempty"`
	Included []Resource                         `json:"included,omitempty"`
	Jsonapi  *EntryInfoResponseJSONAPI          `json:"jsonapi,omitempty"`
	Links    *EntryInfoResponseToplevelLinks    `json:"links,omitempty"`
	Meta     EntryInfoResponseResponseMeta      `json:"meta"`
}
