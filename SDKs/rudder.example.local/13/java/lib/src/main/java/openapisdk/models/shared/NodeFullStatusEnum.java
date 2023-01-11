package openapisdk.models.shared;


public enum NodeFullStatusEnum {
    PENDING("pending"),
    ACCEPTED("accepted"),
    DELETED("deleted");

    public final String value;

    private NodeFullStatusEnum(String value) {
        this.value = value;
    }
}
