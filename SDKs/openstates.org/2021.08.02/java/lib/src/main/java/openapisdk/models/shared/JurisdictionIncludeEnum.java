package openapisdk.models.shared;


public enum JurisdictionIncludeEnum {
    ORGANIZATIONS("organizations"),
    LEGISLATIVE_SESSIONS("legislative_sessions"),
    LATEST_RUNS("latest_runs");

    public final String value;

    private JurisdictionIncludeEnum(String value) {
        this.value = value;
    }
}
