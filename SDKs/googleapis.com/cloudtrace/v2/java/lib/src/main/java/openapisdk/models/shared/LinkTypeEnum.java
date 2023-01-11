package openapisdk.models.shared;


public enum LinkTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    CHILD_LINKED_SPAN("CHILD_LINKED_SPAN"),
    PARENT_LINKED_SPAN("PARENT_LINKED_SPAN");

    public final String value;

    private LinkTypeEnum(String value) {
        this.value = value;
    }
}
