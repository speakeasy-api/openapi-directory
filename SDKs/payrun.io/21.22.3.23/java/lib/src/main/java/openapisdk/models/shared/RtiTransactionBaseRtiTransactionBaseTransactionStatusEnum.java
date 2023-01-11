package openapisdk.models.shared;


public enum RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum {
    NEW_("New"),
    REQUEST_GENERATED("RequestGenerated"),
    COMPLETED_WITH_ERROR("CompletedWithError"),
    COMPLETED_WITH_SUCCESS("CompletedWithSuccess"),
    TIME_OUT("TimeOut");

    public final String value;

    private RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum(String value) {
        this.value = value;
    }
}
