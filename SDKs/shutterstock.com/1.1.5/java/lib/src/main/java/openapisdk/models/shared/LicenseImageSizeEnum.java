package openapisdk.models.shared;


public enum LicenseImageSizeEnum {
    SMALL("small"),
    MEDIUM("medium"),
    HUGE("huge"),
    VECTOR("vector"),
    CUSTOM("custom");

    public final String value;

    private LicenseImageSizeEnum(String value) {
        this.value = value;
    }
}
