package openapisdk.models.shared;


public enum GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum {
    THREAT_ENTRY_TYPE_UNSPECIFIED("THREAT_ENTRY_TYPE_UNSPECIFIED"),
    URL("URL"),
    EXECUTABLE("EXECUTABLE"),
    IP_RANGE("IP_RANGE"),
    CHROME_EXTENSION("CHROME_EXTENSION"),
    FILENAME("FILENAME"),
    CERT("CERT");

    public final String value;

    private GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum(String value) {
        this.value = value;
    }
}
