package openapisdk.models.operations;


public enum AcceptChangeRequestRequestBodyStatusEnum {
    PENDING_DEPLOYMENT("pending deployment"),
    DEPLOYED("deployed");

    public final String value;

    private AcceptChangeRequestRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
