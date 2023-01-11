package openapisdk.models.shared;


public enum WebhookEventEnum {
    BATCH("batch"),
    CARRIER_CONNECTED("carrier_connected"),
    ORDER_SOURCE_REFRESH_COMPLETE("order_source_refresh_complete"),
    RATE("rate"),
    REPORT_COMPLETE("report_complete"),
    SALES_ORDERS_IMPORTED("sales_orders_imported"),
    TRACK("track");

    public final String value;

    private WebhookEventEnum(String value) {
        this.value = value;
    }
}
