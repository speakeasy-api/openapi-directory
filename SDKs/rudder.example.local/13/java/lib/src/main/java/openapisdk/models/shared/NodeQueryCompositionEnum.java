package openapisdk.models.shared;


public enum NodeQueryCompositionEnum {
    AND("and"),
    OR("or");

    public final String value;

    private NodeQueryCompositionEnum(String value) {
        this.value = value;
    }
}
