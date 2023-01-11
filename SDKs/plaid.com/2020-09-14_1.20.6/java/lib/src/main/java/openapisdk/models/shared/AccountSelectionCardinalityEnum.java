package openapisdk.models.shared;


public enum AccountSelectionCardinalityEnum {
    SINGLE_SELECT("SINGLE_SELECT"),
    MULTI_SELECT("MULTI_SELECT"),
    ALL("ALL");

    public final String value;

    private AccountSelectionCardinalityEnum(String value) {
        this.value = value;
    }
}
