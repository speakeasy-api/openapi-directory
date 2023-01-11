package openapisdk.models.shared;


public enum QuotaPropertiesQuotaModeEnum {
    ACQUIRE("ACQUIRE"),
    ACQUIRE_BEST_EFFORT("ACQUIRE_BEST_EFFORT"),
    CHECK("CHECK"),
    RELEASE("RELEASE");

    public final String value;

    private QuotaPropertiesQuotaModeEnum(String value) {
        this.value = value;
    }
}
