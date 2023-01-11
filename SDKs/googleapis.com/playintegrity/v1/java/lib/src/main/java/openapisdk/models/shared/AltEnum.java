package openapisdk.models.shared;


public enum AltEnum {
    JSON("json"),
    MEDIA("media"),
    PROTO("proto");

    public final String value;

    private AltEnum(String value) {
        this.value = value;
    }
}
