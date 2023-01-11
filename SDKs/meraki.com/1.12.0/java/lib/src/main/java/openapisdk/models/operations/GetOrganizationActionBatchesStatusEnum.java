package openapisdk.models.operations;


public enum GetOrganizationActionBatchesStatusEnum {
    PENDING("pending"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private GetOrganizationActionBatchesStatusEnum(String value) {
        this.value = value;
    }
}
