package openapisdk.models.shared;


public enum EmployeeEmployeeLeaverReasonEnum {
    RESIGNED("Resigned"),
    DISMISSED("Dismissed"),
    REDUNDANT("Redundant"),
    RETIRED("Retired"),
    DECEASED("Deceased"),
    LEGAL_CUSTODY("LegalCustody"),
    OTHER("Other");

    public final String value;

    private EmployeeEmployeeLeaverReasonEnum(String value) {
        this.value = value;
    }
}
