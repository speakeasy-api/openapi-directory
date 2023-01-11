package openapisdk.models.shared;


public enum ProjectStatusEnum {
    PENDING("pending"),
    STARTED("started"),
    COMPLETED("completed"),
    TRANSLATED("translated"),
    PROOFREAD("proofread");

    public final String value;

    private ProjectStatusEnum(String value) {
        this.value = value;
    }
}
