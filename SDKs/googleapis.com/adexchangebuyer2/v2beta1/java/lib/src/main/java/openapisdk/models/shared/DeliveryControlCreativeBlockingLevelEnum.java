package openapisdk.models.shared;


public enum DeliveryControlCreativeBlockingLevelEnum {
    CREATIVE_BLOCKING_LEVEL_UNSPECIFIED("CREATIVE_BLOCKING_LEVEL_UNSPECIFIED"),
    PUBLISHER_BLOCKING_RULES("PUBLISHER_BLOCKING_RULES"),
    ADX_POLICY_BLOCKING_ONLY("ADX_POLICY_BLOCKING_ONLY");

    public final String value;

    private DeliveryControlCreativeBlockingLevelEnum(String value) {
        this.value = value;
    }
}
