package openapisdk.models.operations;


public enum ListAdvisoriesSortEnum {
    ID("id"),
    NAME("name"),
    ADVISORY_TYPE("advisory_type"),
    SYNOPSIS("synopsis"),
    PUBLIC_DATE("public_date"),
    APPLICABLE_SYSTEMS("applicable_systems");

    public final String value;

    private ListAdvisoriesSortEnum(String value) {
        this.value = value;
    }
}
