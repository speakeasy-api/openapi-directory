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

// GetRecords200ApplicationJSON1
// Verify
type GetRecords200ApplicationJSON1 struct {
	ItemsCount *int64                    `json:"items_count,omitempty"`
	Product    *shared.ProductVerifyEnum `json:"product,omitempty"`
	Records    []shared.CsvVerify        `json:"records,omitempty"`
}

// GetRecords200ApplicationJSON2
// Conversations
type GetRecords200ApplicationJSON2 struct {
	ItemsCount *int64                           `json:"items_count,omitempty"`
	Product    *shared.ProductConversationsEnum `json:"product,omitempty"`
	Records    []shared.CsvConversations        `json:"records,omitempty"`
}

// GetRecords200ApplicationJSON3
// WebSocket Call
type GetRecords200ApplicationJSON3 struct {
	ItemsCount *int64                       `json:"items_count,omitempty"`
	Product    *shared.ProductWebsocketEnum `json:"product,omitempty"`
	Records    []shared.CsvWebsockets       `json:"records,omitempty"`
}

type GetRecords200ApplicationJSON4DirectionEnum string

const (
	GetRecords200ApplicationJSON4DirectionEnumInbound  GetRecords200ApplicationJSON4DirectionEnum = "inbound"
	GetRecords200ApplicationJSON4DirectionEnumOutbound GetRecords200ApplicationJSON4DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON4
// Messages (Inbound)
type GetRecords200ApplicationJSON4 struct {
	Direction        *GetRecords200ApplicationJSON4DirectionEnum `json:"direction,omitempty"`
	IncludeMessage   *bool                                       `json:"include_message,omitempty"`
	ItemsCount       *int64                                      `json:"items_count,omitempty"`
	Product          *shared.ProductMessagesEnum                 `json:"product,omitempty"`
	Records          []shared.CsvMessagesInbound                 `json:"records,omitempty"`
	ShowConcatenated *bool                                       `json:"show_concatenated,omitempty"`
}

// GetRecords200ApplicationJSON5
// Number Insight
type GetRecords200ApplicationJSON5 struct {
	ItemsCount *int64                `json:"items_count,omitempty"`
	Product    *shared.ProductNiEnum `json:"product,omitempty"`
	Records    []shared.CsvNi        `json:"records,omitempty"`
}

type GetRecords200ApplicationJSON6DirectionEnum string

const (
	GetRecords200ApplicationJSON6DirectionEnumInbound  GetRecords200ApplicationJSON6DirectionEnum = "inbound"
	GetRecords200ApplicationJSON6DirectionEnumOutbound GetRecords200ApplicationJSON6DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON6
// Messages (Outbound)
type GetRecords200ApplicationJSON6 struct {
	Direction        *GetRecords200ApplicationJSON6DirectionEnum `json:"direction,omitempty"`
	IncludeMessage   *bool                                       `json:"include_message,omitempty"`
	ItemsCount       *int64                                      `json:"items_count,omitempty"`
	Product          *shared.ProductMessagesEnum                 `json:"product,omitempty"`
	Records          []shared.CsvMessagesOutbound                `json:"records,omitempty"`
	ShowConcatenated *bool                                       `json:"show_concatenated,omitempty"`
}

// GetRecords200ApplicationJSON7
// In App Voice
type GetRecords200ApplicationJSON7 struct {
	ItemsCount *int64                        `json:"items_count,omitempty"`
	Product    *shared.ProductInAppVoiceEnum `json:"product,omitempty"`
	Records    []shared.CsvInAppVoice        `json:"records,omitempty"`
}

// GetRecords200ApplicationJSON8
// ASR
type GetRecords200ApplicationJSON8 struct {
	ItemsCount *int64                 `json:"items_count,omitempty"`
	Product    *shared.ProductAsrEnum `json:"product,omitempty"`
	Records    []shared.CsvAsr        `json:"records,omitempty"`
}

// GetRecords200ApplicationJSON9
// Voice Call
type GetRecords200ApplicationJSON9 struct {
	Direction  *shared.DirectionEnum    `json:"direction,omitempty"`
	ItemsCount *int64                   `json:"items_count,omitempty"`
	Product    *shared.ProductVoiceEnum `json:"product,omitempty"`
	Records    []shared.CsvVoice        `json:"records,omitempty"`
}

type GetRecords200ApplicationJSON10DirectionEnum string

const (
	GetRecords200ApplicationJSON10DirectionEnumInbound  GetRecords200ApplicationJSON10DirectionEnum = "inbound"
	GetRecords200ApplicationJSON10DirectionEnumOutbound GetRecords200ApplicationJSON10DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON10
// SMS (Inbound)
type GetRecords200ApplicationJSON10 struct {
	Direction        *GetRecords200ApplicationJSON10DirectionEnum `json:"direction,omitempty"`
	IncludeMessage   *bool                                        `json:"include_message,omitempty"`
	ItemsCount       *int64                                       `json:"items_count,omitempty"`
	Product          *shared.ProductSmsEnum                       `json:"product,omitempty"`
	Records          []shared.JSONSmsInboundWithBody              `json:"records,omitempty"`
	ShowConcatenated *bool                                        `json:"show_concatenated,omitempty"`
}

type GetRecords200ApplicationJSON11DirectionEnum string

const (
	GetRecords200ApplicationJSON11DirectionEnumInbound  GetRecords200ApplicationJSON11DirectionEnum = "inbound"
	GetRecords200ApplicationJSON11DirectionEnumOutbound GetRecords200ApplicationJSON11DirectionEnum = "outbound"
)

// GetRecords200ApplicationJSON11
// SMS (Outbound)
type GetRecords200ApplicationJSON11 struct {
	Direction        *GetRecords200ApplicationJSON11DirectionEnum `json:"direction,omitempty"`
	IncludeMessage   *bool                                        `json:"include_message,omitempty"`
	ItemsCount       *int64                                       `json:"items_count,omitempty"`
	Product          *shared.ProductSmsEnum                       `json:"product,omitempty"`
	Records          []shared.JSONSmsOutboundWithBody             `json:"records,omitempty"`
	ShowConcatenated *bool                                        `json:"show_concatenated,omitempty"`
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
