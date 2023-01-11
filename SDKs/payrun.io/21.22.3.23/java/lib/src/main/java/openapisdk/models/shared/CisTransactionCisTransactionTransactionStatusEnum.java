package openapisdk.models.shared;


public enum CisTransactionCisTransactionTransactionStatusEnum {
    NEW_("New"),
    REQUEST_GENERATED("RequestGenerated"),
    COMPLETED_WITH_ERROR("CompletedWithError"),
    COMPLETED_WITH_SUCCESS("CompletedWithSuccess"),
    TIME_OUT("TimeOut");

    public final String value;

    private CisTransactionCisTransactionTransactionStatusEnum(String value) {
        this.value = value;
    }
}
