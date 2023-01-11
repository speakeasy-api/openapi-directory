package openapisdk.models.shared;


public enum ChangeStatusEnum {
    PENDING("pending"),
    DONE("done");

    public final String value;

    private ChangeStatusEnum(String value) {
        this.value = value;
    }
}
