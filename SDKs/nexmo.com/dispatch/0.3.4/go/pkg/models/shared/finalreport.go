package shared

type FinalReportLinksMessagesChannelEnum string

const (
	FinalReportLinksMessagesChannelEnumMessenger      FinalReportLinksMessagesChannelEnum = "messenger"
	FinalReportLinksMessagesChannelEnumViberSeviceMsg FinalReportLinksMessagesChannelEnum = "viber_sevice_msg"
	FinalReportLinksMessagesChannelEnumSms            FinalReportLinksMessagesChannelEnum = "sms"
	FinalReportLinksMessagesChannelEnumWhatsapp       FinalReportLinksMessagesChannelEnum = "whatsapp"
	FinalReportLinksMessagesChannelEnumMms            FinalReportLinksMessagesChannelEnum = "mms"
)

type FinalReportLinksMessagesStatusEnum string

const (
	FinalReportLinksMessagesStatusEnumSubmitted     FinalReportLinksMessagesStatusEnum = "submitted"
	FinalReportLinksMessagesStatusEnumDelivered     FinalReportLinksMessagesStatusEnum = "delivered"
	FinalReportLinksMessagesStatusEnumRead          FinalReportLinksMessagesStatusEnum = "read"
	FinalReportLinksMessagesStatusEnumRejected      FinalReportLinksMessagesStatusEnum = "rejected"
	FinalReportLinksMessagesStatusEnumUndeliverable FinalReportLinksMessagesStatusEnum = "undeliverable"
)

type FinalReportLinksMessagesUsageCurrencyEnum string

const (
	FinalReportLinksMessagesUsageCurrencyEnumEur FinalReportLinksMessagesUsageCurrencyEnum = "EUR"
)

type FinalReportLinksMessagesUsage struct {
	Currency *FinalReportLinksMessagesUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                                    `json:"price,omitempty"`
}

type FinalReportLinksMessages struct {
	Channel     *FinalReportLinksMessagesChannelEnum `json:"channel,omitempty"`
	Href        *string                              `json:"href,omitempty"`
	MessageUUID *string                              `json:"message_uuid,omitempty"`
	Status      *FinalReportLinksMessagesStatusEnum  `json:"status,omitempty"`
	Usage       *FinalReportLinksMessagesUsage       `json:"usage,omitempty"`
}

type FinalReportLinks struct {
	Messages []FinalReportLinksMessages `json:"messages,omitempty"`
}

type FinalReportStatusEnum string

const (
	FinalReportStatusEnumCompleted FinalReportStatusEnum = "completed"
	FinalReportStatusEnumError     FinalReportStatusEnum = "error"
)

type FinalReportTemplateEnum string

const (
	FinalReportTemplateEnumFailover FinalReportTemplateEnum = "failover"
)

type FinalReportUsageCurrencyEnum string

const (
	FinalReportUsageCurrencyEnumEur FinalReportUsageCurrencyEnum = "EUR"
)

// FinalReportUsage
// This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.
type FinalReportUsage struct {
	Currency *FinalReportUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                       `json:"price,omitempty"`
}

type FinalReport struct {
	Links        *FinalReportLinks        `json:"_links,omitempty"`
	DispatchUUID *string                  `json:"dispatch_uuid,omitempty"`
	Status       *FinalReportStatusEnum   `json:"status,omitempty"`
	Template     *FinalReportTemplateEnum `json:"template,omitempty"`
	Timestamp    *string                  `json:"timestamp,omitempty"`
	Usage        *FinalReportUsage        `json:"usage,omitempty"`
}
