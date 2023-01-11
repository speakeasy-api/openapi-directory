package openapisdk.models.shared;


public enum TaskEnumStatusEnum {
    PENDING("pending"),
    RESERVED("reserved"),
    ASSIGNED("assigned"),
    CANCELED("canceled"),
    COMPLETED("completed"),
    WRAPPING("wrapping");

    public final String value;

    private TaskEnumStatusEnum(String value) {
        this.value = value;
    }
}
