package openapisdk.models.operations;


public enum WebriskHashesSearchThreatTypesEnum {
    THREAT_TYPE_UNSPECIFIED("THREAT_TYPE_UNSPECIFIED"),
    MALWARE("MALWARE"),
    SOCIAL_ENGINEERING("SOCIAL_ENGINEERING"),
    UNWANTED_SOFTWARE("UNWANTED_SOFTWARE"),
    SOCIAL_ENGINEERING_EXTENDED_COVERAGE("SOCIAL_ENGINEERING_EXTENDED_COVERAGE");

    public final String value;

    private WebriskHashesSearchThreatTypesEnum(String value) {
        this.value = value;
    }
}
