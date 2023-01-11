package openapisdk.models.shared;


public enum JobJobLevelEnum {
    JOB_LEVEL_UNSPECIFIED("JOB_LEVEL_UNSPECIFIED"),
    ENTRY_LEVEL("ENTRY_LEVEL"),
    EXPERIENCED("EXPERIENCED"),
    MANAGER("MANAGER"),
    DIRECTOR("DIRECTOR"),
    EXECUTIVE("EXECUTIVE");

    public final String value;

    private JobJobLevelEnum(String value) {
        this.value = value;
    }
}
