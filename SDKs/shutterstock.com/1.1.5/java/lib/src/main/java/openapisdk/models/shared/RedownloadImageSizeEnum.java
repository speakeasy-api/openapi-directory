package openapisdk.models.shared;


public enum RedownloadImageSizeEnum {
    SMALL("small"),
    MEDIUM("medium"),
    HUGE("huge"),
    SUPERSIZE("supersize"),
    VECTOR("vector");

    public final String value;

    private RedownloadImageSizeEnum(String value) {
        this.value = value;
    }
}
