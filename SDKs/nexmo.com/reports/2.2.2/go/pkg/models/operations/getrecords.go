package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetRecordsDirectionEnum string

const (
	GetRecordsDirectionEnumInbound  GetRecordsDirectionEnum = "inbound"
	GetRecordsDirectionEnumOutbound GetRecordsDirectionEnum = "outbound"
)

type GetRecordsProductEnum string

const (
	GetRecordsProductEnumSms           GetRecordsProductEnum = "SMS"
	GetRecordsProductEnumVoiceCall     GetRecordsProductEnum = "VOICE-CALL"
	GetRecordsProductEnumVoiceFailed   GetRecordsProductEnum = "VOICE-FAILED"
	GetRecordsProductEnumInAppVoice    GetRecordsProductEnum = "IN-APP-VOICE"
	GetRecordsProductEnumWebsocketCall GetRecordsProductEnum = "WEBSOCKET-CALL"
	GetRecordsProductEnumVerifyAPI     GetRecordsProductEnum = "VERIFY-API"
	GetRecordsProductEnumNumberInsight GetRecordsProductEnum = "NUMBER-INSIGHT"
	GetRecordsProductEnumMessages      GetRecordsProductEnum = "MESSAGES"
	GetRecordsProductEnumAsr           GetRecordsProductEnum = "ASR"
	GetRecordsProductEnumConversations GetRecordsProductEnum = "CONVERSATIONS"
	GetRecordsProductEnumReportsUsage  GetRecordsProductEnum = "REPORTS-USAGE"
)

type GetRecordsStatusEnum string

const (
	GetRecordsStatusEnumDelivered GetRecordsStatusEnum = "delivered"
	GetRecordsStatusEnumExpired   GetRecordsStatusEnum = "expired"
	GetRecordsStatusEnumFailed    GetRecordsStatusEnum = "failed"
	GetRecordsStatusEnumRejected  GetRecordsStatusEnum = "rejected"
	GetRecordsStatusEnumAccepted  GetRecordsStatusEnum = "accepted"
	GetRecordsStatusEnumBuffered  GetRecordsStatusEnum = "buffered"
	GetRecordsStatusEnumUnknown   GetRecordsStatusEnum = "unknown"
	GetRecordsStatusEnumDeleted   GetRecordsStatusEnum = "deleted"
)

type GetRecordsQueryParams struct {
	AccountID        string                   `queryParam:"style=form,explode=true,name=account_id"`
	DateEnd          *time.Time               `queryParam:"style=form,explode=true,name=date_end"`
	DateStart        *time.Time               `queryParam:"style=form,explode=true,name=date_start"`
	Direction        *GetRecordsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	ID               *string                  `queryParam:"style=form,explode=true,name=id"`
	IncludeMessage   *bool                    `queryParam:"style=form,explode=true,name=include_message"`
	Product          GetRecordsProductEnum    `queryParam:"style=form,explode=true,name=product"`
	ShowConcatenated *bool                    `queryParam:"style=form,explode=true,name=show_concatenated"`
	Status           *GetRecordsStatusEnum    `queryParam:"style=form,explode=true,name=status"`
}

type GetRecordsSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetRecords200ApplicationJSON1LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON1Links struct {
	Self *GetRecords200ApplicationJSON1LinksSelf `json:"self,omitempty"`
}

type GetRecords200ApplicationJSON1DirectionEnum string

const (
	GetRecords200ApplicationJSON1DirectionEnumInbound  GetRecords200ApplicationJSON1DirectionEnum = "inbound"
	GetRecords200ApplicationJSON1DirectionEnumOutbound GetRecords200ApplicationJSON1DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON1
// SMS (Outbound)
type GetRecords200ApplicationJSON1 struct {
	Links            *GetRecords200ApplicationJSON1Links         `json:"_links,omitempty"`
	AccountID        *string                                     `json:"account_id,omitempty"`
	Currency         *string                                     `json:"currency,omitempty"`
	Direction        *GetRecords200ApplicationJSON1DirectionEnum `json:"direction,omitempty"`
	IdsNotFound      *string                                     `json:"ids_not_found,omitempty"`
	IncludeMessage   *bool                                       `json:"include_message,omitempty"`
	ItemsCount       *int64                                      `json:"items_count,omitempty"`
	Price            *float64                                    `json:"price,omitempty"`
	Product          *shared.ProductSmsEnum                      `json:"product,omitempty"`
	ReceivedAt       *time.Time                                  `json:"received_at,omitempty"`
	Records          []shared.JSONSmsOutboundWithBody            `json:"records,omitempty"`
	RequestID        *string                                     `json:"request_id,omitempty"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status,omitempty"`
	ShowConcatenated *bool                                       `json:"show_concatenated,omitempty"`
}

type GetRecords200ApplicationJSON2LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON2Links struct {
	Self *GetRecords200ApplicationJSON2LinksSelf `json:"self,omitempty"`
}

type GetRecords200ApplicationJSON2DirectionEnum string

const (
	GetRecords200ApplicationJSON2DirectionEnumInbound  GetRecords200ApplicationJSON2DirectionEnum = "inbound"
	GetRecords200ApplicationJSON2DirectionEnumOutbound GetRecords200ApplicationJSON2DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON2
// SMS (Inbound)
type GetRecords200ApplicationJSON2 struct {
	Links            *GetRecords200ApplicationJSON2Links         `json:"_links,omitempty"`
	AccountID        *string                                     `json:"account_id,omitempty"`
	Currency         *string                                     `json:"currency,omitempty"`
	Direction        *GetRecords200ApplicationJSON2DirectionEnum `json:"direction,omitempty"`
	IdsNotFound      *string                                     `json:"ids_not_found,omitempty"`
	IncludeMessage   *bool                                       `json:"include_message,omitempty"`
	ItemsCount       *int64                                      `json:"items_count,omitempty"`
	Price            *float64                                    `json:"price,omitempty"`
	Product          *shared.ProductSmsEnum                      `json:"product,omitempty"`
	ReceivedAt       *time.Time                                  `json:"received_at,omitempty"`
	Records          []shared.JSONSmsInboundWithBody             `json:"records,omitempty"`
	RequestID        *string                                     `json:"request_id,omitempty"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status,omitempty"`
	ShowConcatenated *bool                                       `json:"show_concatenated,omitempty"`
}

type GetRecords200ApplicationJSON3LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON3Links struct {
	Self *GetRecords200ApplicationJSON3LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON3
// Voice Call
type GetRecords200ApplicationJSON3 struct {
	Links         *GetRecords200ApplicationJSON3Links `json:"_links,omitempty"`
	AccountID     *string                             `json:"account_id,omitempty"`
	Currency      *string                             `json:"currency,omitempty"`
	Direction     *shared.DirectionEnum               `json:"direction,omitempty"`
	IdsNotFound   *string                             `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                              `json:"items_count,omitempty"`
	Price         *float64                            `json:"price,omitempty"`
	Product       *shared.ProductVoiceEnum            `json:"product,omitempty"`
	ReceivedAt    *time.Time                          `json:"received_at,omitempty"`
	Records       []shared.CsvVoice                   `json:"records,omitempty"`
	RequestID     *string                             `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status,omitempty"`
}

type GetRecords200ApplicationJSON4LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON4Links struct {
	Self *GetRecords200ApplicationJSON4LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON4
// In App Voice
type GetRecords200ApplicationJSON4 struct {
	Links         *GetRecords200ApplicationJSON4Links `json:"_links,omitempty"`
	AccountID     *string                             `json:"account_id,omitempty"`
	Currency      *string                             `json:"currency,omitempty"`
	IdsNotFound   *string                             `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                              `json:"items_count,omitempty"`
	Price         *float64                            `json:"price,omitempty"`
	Product       *shared.ProductInAppVoiceEnum       `json:"product,omitempty"`
	ReceivedAt    *time.Time                          `json:"received_at,omitempty"`
	Records       []shared.CsvInAppVoice              `json:"records,omitempty"`
	RequestID     *string                             `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status,omitempty"`
}

type GetRecords200ApplicationJSON5LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON5Links struct {
	Self *GetRecords200ApplicationJSON5LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON5
// WebSocket Call
type GetRecords200ApplicationJSON5 struct {
	Links         *GetRecords200ApplicationJSON5Links `json:"_links,omitempty"`
	AccountID     *string                             `json:"account_id,omitempty"`
	Currency      *string                             `json:"currency,omitempty"`
	IdsNotFound   *string                             `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                              `json:"items_count,omitempty"`
	Price         *float64                            `json:"price,omitempty"`
	Product       *shared.ProductWebsocketEnum        `json:"product,omitempty"`
	ReceivedAt    *time.Time                          `json:"received_at,omitempty"`
	Records       []shared.CsvWebsockets              `json:"records,omitempty"`
	RequestID     *string                             `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status,omitempty"`
}

type GetRecords200ApplicationJSON6LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON6Links struct {
	Self *GetRecords200ApplicationJSON6LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON6
// Verify
type GetRecords200ApplicationJSON6 struct {
	Links         *GetRecords200ApplicationJSON6Links `json:"_links,omitempty"`
	AccountID     *string                             `json:"account_id,omitempty"`
	Currency      *string                             `json:"currency,omitempty"`
	IdsNotFound   *string                             `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                              `json:"items_count,omitempty"`
	Price         *float64                            `json:"price,omitempty"`
	Product       *shared.ProductVerifyEnum           `json:"product,omitempty"`
	ReceivedAt    *time.Time                          `json:"received_at,omitempty"`
	Records       []shared.CsvVerify                  `json:"records,omitempty"`
	RequestID     *string                             `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status,omitempty"`
}

type GetRecords200ApplicationJSON7LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON7Links struct {
	Self *GetRecords200ApplicationJSON7LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON7
// Number Insight
type GetRecords200ApplicationJSON7 struct {
	Links         *GetRecords200ApplicationJSON7Links `json:"_links,omitempty"`
	AccountID     *string                             `json:"account_id,omitempty"`
	Currency      *string                             `json:"currency,omitempty"`
	IdsNotFound   *string                             `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                              `json:"items_count,omitempty"`
	Price         *float64                            `json:"price,omitempty"`
	Product       *shared.ProductNiEnum               `json:"product,omitempty"`
	ReceivedAt    *time.Time                          `json:"received_at,omitempty"`
	Records       []shared.CsvNi                      `json:"records,omitempty"`
	RequestID     *string                             `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status,omitempty"`
}

type GetRecords200ApplicationJSON8LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON8Links struct {
	Self *GetRecords200ApplicationJSON8LinksSelf `json:"self,omitempty"`
}

type GetRecords200ApplicationJSON8DirectionEnum string

const (
	GetRecords200ApplicationJSON8DirectionEnumInbound  GetRecords200ApplicationJSON8DirectionEnum = "inbound"
	GetRecords200ApplicationJSON8DirectionEnumOutbound GetRecords200ApplicationJSON8DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON8
// Messages (Outbound)
type GetRecords200ApplicationJSON8 struct {
	Links            *GetRecords200ApplicationJSON8Links         `json:"_links,omitempty"`
	AccountID        *string                                     `json:"account_id,omitempty"`
	Currency         *string                                     `json:"currency,omitempty"`
	Direction        *GetRecords200ApplicationJSON8DirectionEnum `json:"direction,omitempty"`
	IdsNotFound      *string                                     `json:"ids_not_found,omitempty"`
	IncludeMessage   *bool                                       `json:"include_message,omitempty"`
	ItemsCount       *int64                                      `json:"items_count,omitempty"`
	Price            *float64                                    `json:"price,omitempty"`
	Product          *shared.ProductMessagesEnum                 `json:"product,omitempty"`
	ReceivedAt       *time.Time                                  `json:"received_at,omitempty"`
	Records          []shared.CsvMessagesOutbound                `json:"records,omitempty"`
	RequestID        *string                                     `json:"request_id,omitempty"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status,omitempty"`
	ShowConcatenated *bool                                       `json:"show_concatenated,omitempty"`
}

type GetRecords200ApplicationJSON9LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON9Links struct {
	Self *GetRecords200ApplicationJSON9LinksSelf `json:"self,omitempty"`
}

type GetRecords200ApplicationJSON9DirectionEnum string

const (
	GetRecords200ApplicationJSON9DirectionEnumInbound  GetRecords200ApplicationJSON9DirectionEnum = "inbound"
	GetRecords200ApplicationJSON9DirectionEnumOutbound GetRecords200ApplicationJSON9DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON9
// Messages (Inbound)
type GetRecords200ApplicationJSON9 struct {
	Links            *GetRecords200ApplicationJSON9Links         `json:"_links,omitempty"`
	AccountID        *string                                     `json:"account_id,omitempty"`
	Currency         *string                                     `json:"currency,omitempty"`
	Direction        *GetRecords200ApplicationJSON9DirectionEnum `json:"direction,omitempty"`
	IdsNotFound      *string                                     `json:"ids_not_found,omitempty"`
	IncludeMessage   *bool                                       `json:"include_message,omitempty"`
	ItemsCount       *int64                                      `json:"items_count,omitempty"`
	Price            *float64                                    `json:"price,omitempty"`
	Product          *shared.ProductMessagesEnum                 `json:"product,omitempty"`
	ReceivedAt       *time.Time                                  `json:"received_at,omitempty"`
	Records          []shared.CsvMessagesInbound                 `json:"records,omitempty"`
	RequestID        *string                                     `json:"request_id,omitempty"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status,omitempty"`
	ShowConcatenated *bool                                       `json:"show_concatenated,omitempty"`
}

type GetRecords200ApplicationJSON10LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON10Links struct {
	Self *GetRecords200ApplicationJSON10LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON10
// ASR
type GetRecords200ApplicationJSON10 struct {
	Links         *GetRecords200ApplicationJSON10Links `json:"_links,omitempty"`
	AccountID     *string                              `json:"account_id,omitempty"`
	Currency      *string                              `json:"currency,omitempty"`
	IdsNotFound   *string                              `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                               `json:"items_count,omitempty"`
	Price         *float64                             `json:"price,omitempty"`
	Product       *shared.ProductAsrEnum               `json:"product,omitempty"`
	ReceivedAt    *time.Time                           `json:"received_at,omitempty"`
	Records       []shared.CsvAsr                      `json:"records,omitempty"`
	RequestID     *string                              `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum            `json:"request_status,omitempty"`
}

type GetRecords200ApplicationJSON11LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetRecords200ApplicationJSON11Links struct {
	Self *GetRecords200ApplicationJSON11LinksSelf `json:"self,omitempty"`
}

// GetRecords200ApplicationJSON11
// Conversations
type GetRecords200ApplicationJSON11 struct {
	Links         *GetRecords200ApplicationJSON11Links `json:"_links,omitempty"`
	AccountID     *string                              `json:"account_id,omitempty"`
	Currency      *string                              `json:"currency,omitempty"`
	IdsNotFound   *string                              `json:"ids_not_found,omitempty"`
	ItemsCount    *int64                               `json:"items_count,omitempty"`
	Price         *float64                             `json:"price,omitempty"`
	Product       *shared.ProductConversationsEnum     `json:"product,omitempty"`
	ReceivedAt    *time.Time                           `json:"received_at,omitempty"`
	Records       []shared.CsvConversations            `json:"records,omitempty"`
	RequestID     *string                              `json:"request_id,omitempty"`
	RequestStatus *shared.RequestStatusEnum            `json:"request_status,omitempty"`
}

type GetRecordsRequest struct {
	QueryParams GetRecordsQueryParams
	Security    GetRecordsSecurity
}

type GetRecordsResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetRecords200ApplicationJSONOneOf *interface{}
	GetRecords403ApplicationJSONAny   *interface{}
	GetRecords422ApplicationJSONOneOf *interface{}
}
