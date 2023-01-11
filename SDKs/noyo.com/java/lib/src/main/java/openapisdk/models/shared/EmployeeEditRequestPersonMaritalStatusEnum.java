package openapisdk.models.shared;


public enum EmployeeEditRequestPersonMaritalStatusEnum {
    DIVORCED("divorced"),
    DOMESTIC_PARTNER("domestic-partner"),
    LEGALLY_SEPARATED("legally-separated"),
    MARRIED("married"),
    SINGLE("single"),
    WIDOWED("widowed");

    public final String value;

    private EmployeeEditRequestPersonMaritalStatusEnum(String value) {
        this.value = value;
    }
}
