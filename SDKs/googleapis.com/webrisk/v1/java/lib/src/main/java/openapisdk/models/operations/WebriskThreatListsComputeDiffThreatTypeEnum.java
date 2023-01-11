package openapisdk.models.operations;


public enum WebriskThreatListsComputeDiffThreatTypeEnum {
    THREAT_TYPE_UNSPECIFIED("THREAT_TYPE_UNSPECIFIED"),
    MALWARE("MALWARE"),
    SOCIAL_ENGINEERING("SOCIAL_ENGINEERING"),
    UNWANTED_SOFTWARE("UNWANTED_SOFTWARE"),
    SOCIAL_ENGINEERING_EXTENDED_COVERAGE("SOCIAL_ENGINEERING_EXTENDED_COVERAGE");

    public final String value;

    private WebriskThreatListsComputeDiffThreatTypeEnum(String value) {
        this.value = value;
    }
}
