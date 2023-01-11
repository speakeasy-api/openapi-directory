package openapisdk.models.shared;


public enum DependentEditRequestRelationshipEnum {
    ADOPTED_CHILD("adopted-child"),
    CHILD("child"),
    CIVIL_UNION("civil-union"),
    DOMESTIC_PARTNER("domestic-partner"),
    EX_SPOUSE("ex-spouse"),
    FOSTER_CHILD("foster-child"),
    GRANDCHILD("grandchild"),
    LEGAL_GUARDIANSHIP("legal-guardianship"),
    OTHER("other"),
    SPOUSE("spouse"),
    STEP_CHILD("step-child");

    public final String value;

    private DependentEditRequestRelationshipEnum(String value) {
        this.value = value;
    }
}
