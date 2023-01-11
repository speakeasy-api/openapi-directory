package openapisdk.models.shared;


public enum AdSizeTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    PIXEL("PIXEL"),
    INTERSTITIAL("INTERSTITIAL"),
    NATIVE_("NATIVE"),
    FLUID("FLUID");

    public final String value;

    private AdSizeTypeEnum(String value) {
        this.value = value;
    }
}
