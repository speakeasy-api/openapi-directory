package openapisdk.models.shared;


public enum GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum {
    RETENTION_DURATION_UNSPECIFIED("RETENTION_DURATION_UNSPECIFIED"),
    TWO_MONTHS("TWO_MONTHS"),
    FOURTEEN_MONTHS("FOURTEEN_MONTHS"),
    TWENTY_SIX_MONTHS("TWENTY_SIX_MONTHS"),
    THIRTY_EIGHT_MONTHS("THIRTY_EIGHT_MONTHS"),
    FIFTY_MONTHS("FIFTY_MONTHS");

    public final String value;

    private GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum(String value) {
        this.value = value;
    }
}
