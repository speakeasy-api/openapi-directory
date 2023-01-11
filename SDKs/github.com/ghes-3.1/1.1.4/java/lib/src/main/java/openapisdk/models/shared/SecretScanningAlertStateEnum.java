package openapisdk.models.shared;


public enum SecretScanningAlertStateEnum {
    OPEN("open"),
    RESOLVED("resolved");

    public final String value;

    private SecretScanningAlertStateEnum(String value) {
        this.value = value;
    }
}
