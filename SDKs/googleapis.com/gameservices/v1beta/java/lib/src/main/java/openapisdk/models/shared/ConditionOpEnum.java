package openapisdk.models.shared;


public enum ConditionOpEnum {
    NO_OP("NO_OP"),
    EQUALS("EQUALS"),
    NOT_EQUALS("NOT_EQUALS"),
    IN("IN"),
    NOT_IN("NOT_IN"),
    DISCHARGED("DISCHARGED");

    public final String value;

    private ConditionOpEnum(String value) {
        this.value = value;
    }
}
