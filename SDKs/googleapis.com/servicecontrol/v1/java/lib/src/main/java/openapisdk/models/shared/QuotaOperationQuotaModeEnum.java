package openapisdk.models.shared;


public enum QuotaOperationQuotaModeEnum {
    UNSPECIFIED("UNSPECIFIED"),
    NORMAL("NORMAL"),
    BEST_EFFORT("BEST_EFFORT"),
    CHECK_ONLY("CHECK_ONLY"),
    ADJUST_ONLY("ADJUST_ONLY");

    public final String value;

    private QuotaOperationQuotaModeEnum(String value) {
        this.value = value;
    }
}
