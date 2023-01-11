package openapisdk.models.shared;


public enum DependentResultPersonMaritalStatusEnum {
    DIVORCED("divorced"),
    DOMESTIC_PARTNER("domestic-partner"),
    LEGALLY_SEPARATED("legally-separated"),
    MARRIED("married"),
    SINGLE("single"),
    WIDOWED("widowed");

    public final String value;

    private DependentResultPersonMaritalStatusEnum(String value) {
        this.value = value;
    }
}
