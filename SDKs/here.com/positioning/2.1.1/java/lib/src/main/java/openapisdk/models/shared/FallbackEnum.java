package openapisdk.models.shared;


public enum FallbackEnum {
    ANY("any"),
    AREA("area"),
    SINGLE_WIFI("singleWifi");

    public final String value;

    private FallbackEnum(String value) {
        this.value = value;
    }
}
