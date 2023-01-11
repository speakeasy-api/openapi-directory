package openapisdk.models.shared;


public enum DeliveryErrorErrorTypeEnum {
    DELIVERY_ERROR_TYPE_UNSPECIFIED("DELIVERY_ERROR_TYPE_UNSPECIFIED"),
    RATE_LIMIT_EXCEEDED("RATE_LIMIT_EXCEEDED"),
    SUSPECTED_SPAM("SUSPECTED_SPAM"),
    CONTENT_SPAMMY("CONTENT_SPAMMY"),
    BAD_ATTACHMENT("BAD_ATTACHMENT"),
    BAD_DMARC_POLICY("BAD_DMARC_POLICY"),
    LOW_IP_REPUTATION("LOW_IP_REPUTATION"),
    LOW_DOMAIN_REPUTATION("LOW_DOMAIN_REPUTATION"),
    IP_IN_RBL("IP_IN_RBL"),
    DOMAIN_IN_RBL("DOMAIN_IN_RBL"),
    BAD_PTR_RECORD("BAD_PTR_RECORD");

    public final String value;

    private DeliveryErrorErrorTypeEnum(String value) {
        this.value = value;
    }
}
