package shared

import (
	"time"
)

// InfoResponseBaseInfoResourceResourceLinks
// A Resource Links object
type InfoResponseBaseInfoResourceResourceLinks struct {
	Self *interface{} `json:"self,omitempty"`
}

// InfoResponseBaseInfoResource
// Resource objects appear in a JSON API document to represent resources.
type InfoResponseBaseInfoResource struct {
	Attributes    BaseInfoAttributes                         `json:"attributes"`
	ID            string                                     `json:"id"`
	Links         *InfoResponseBaseInfoResourceResourceLinks `json:"links,omitempty"`
	Meta          map[string]interface{}                     `json:"meta,omitempty"`
	Relationships map[string]interface{}                     `json:"relationships,omitempty"`
	Type          string                                     `json:"type"`
}

// InfoResponseJSONAPI
// An object describing the server's implementation
type InfoResponseJSONAPI struct {
	Meta    map[string]interface{} `json:"meta,omitempty"`
	Version *string                `json:"version,omitempty"`
}

// InfoResponseToplevelLinks
// A set of Links objects, possibly including pagination
type InfoResponseToplevelLinks struct {
	First   *interface{} `json:"first,omitempty"`
	Last    *interface{} `json:"last,omitempty"`
	Next    *interface{} `json:"next,omitempty"`
	Prev    *interface{} `json:"prev,omitempty"`
	Related *interface{} `json:"related,omitempty"`
	Self    *interface{} `json:"self,omitempty"`
}

// InfoResponseResponseMetaImplementationImplementationMaintainer
// Details about the maintainer of the implementation
type InfoResponseResponseMetaImplementationImplementationMaintainer struct {
	Email string `json:"email"`
}

// InfoResponseResponseMetaImplementation
// Information on the server implementation
type InfoResponseResponseMetaImplementation struct {
	Homepage     *interface{}                                                    `json:"homepage,omitempty"`
	IssueTracker *interface{}                                                    `json:"issue_tracker,omitempty"`
	Maintainer   *InfoResponseResponseMetaImplementationImplementationMaintainer `json:"maintainer,omitempty"`
	Name         *string                                                         `json:"name,omitempty"`
	SourceURL    *interface{}                                                    `json:"source_url,omitempty"`
	Version      *string                                                         `json:"version,omitempty"`
}

// InfoResponseResponseMetaProvider
// Information on the database provider of the implementation.
type InfoResponseResponseMetaProvider struct {
	Description string       `json:"description"`
	Homepage    *interface{} `json:"homepage,omitempty"`
	Name        string       `json:"name"`
	Prefix      string       `json:"prefix"`
}

// InfoResponseResponseMetaResponseMetaQuery
// Information on the query that was requested.
type InfoResponseResponseMetaResponseMetaQuery struct {
	Representation string `json:"representation"`
}

// InfoResponseResponseMeta
// A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
// that contains JSON API meta objects of non-standard
// meta-information.
//
// OPTIONAL additional information global to the query that is not
// specified in this document, MUST start with a
// database-provider-specific prefix.
type InfoResponseResponseMeta struct {
	APIVersion        string                                    `json:"api_version"`
	DataAvailable     *int64                                    `json:"data_available,omitempty"`
	DataReturned      *int64                                    `json:"data_returned,omitempty"`
	Implementation    *InfoResponseResponseMetaImplementation   `json:"implementation,omitempty"`
	LastID            *string                                   `json:"last_id,omitempty"`
	MoreDataAvailable bool                                      `json:"more_data_available"`
	Provider          *InfoResponseResponseMetaProvider         `json:"provider,omitempty"`
	Query             InfoResponseResponseMetaResponseMetaQuery `json:"query"`
	ResponseMessage   *string                                   `json:"response_message,omitempty"`
	Schema            *interface{}                              `json:"schema,omitempty"`
	TimeStamp         *time.Time                                `json:"time_stamp,omitempty"`
	Warnings          []Warnings                                `json:"warnings,omitempty"`
}

// InfoResponse
// errors are not allowed
type InfoResponse struct {
	Data     InfoResponseBaseInfoResource `json:"data"`
	Errors   []Error                      `json:"errors,omitempty"`
	Included []Resource                   `json:"included,omitempty"`
	Jsonapi  *InfoResponseJSONAPI         `json:"jsonapi,omitempty"`
	Links    *InfoResponseToplevelLinks   `json:"links,omitempty"`
	Meta     InfoResponseResponseMeta     `json:"meta"`
}
