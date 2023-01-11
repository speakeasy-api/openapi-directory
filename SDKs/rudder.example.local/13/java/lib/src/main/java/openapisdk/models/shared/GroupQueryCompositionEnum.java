package openapisdk.models.shared;


public enum GroupQueryCompositionEnum {
    AND("and"),
    OR("or");

    public final String value;

    private GroupQueryCompositionEnum(String value) {
        this.value = value;
    }
}
