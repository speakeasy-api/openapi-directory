package openapisdk.models.shared;


public enum RateModelCoverageLevelEnum {
    CHILD("Child"),
    EE("EE"),
    EE_PLUS1("EE+1"),
    EE_PLUS_CHILD("EE+Child"),
    EE_PLUS_CHILDREN("EE+Children"),
    EE_PLUS_SPOUSE("EE+Spouse"),
    FAMILY("Family"),
    PMPM("PMPM"),
    SPOUSE("Spouse");

    public final String value;

    private RateModelCoverageLevelEnum(String value) {
        this.value = value;
    }
}
