package shared

type WebhookEventEnum string

const (
	WebhookEventEnumBatch                      WebhookEventEnum = "batch"
	WebhookEventEnumCarrierConnected           WebhookEventEnum = "carrier_connected"
	WebhookEventEnumOrderSourceRefreshComplete WebhookEventEnum = "order_source_refresh_complete"
	WebhookEventEnumRate                       WebhookEventEnum = "rate"
	WebhookEventEnumReportComplete             WebhookEventEnum = "report_complete"
	WebhookEventEnumSalesOrdersImported        WebhookEventEnum = "sales_orders_imported"
	WebhookEventEnumTrack                      WebhookEventEnum = "track"
)
