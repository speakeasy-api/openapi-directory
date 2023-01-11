package openapisdk.models.shared;


public enum JobPostingRegionEnum {
    POSTING_REGION_UNSPECIFIED("POSTING_REGION_UNSPECIFIED"),
    ADMINISTRATIVE_AREA("ADMINISTRATIVE_AREA"),
    NATION("NATION"),
    TELECOMMUTE("TELECOMMUTE");

    public final String value;

    private JobPostingRegionEnum(String value) {
        this.value = value;
    }
}
