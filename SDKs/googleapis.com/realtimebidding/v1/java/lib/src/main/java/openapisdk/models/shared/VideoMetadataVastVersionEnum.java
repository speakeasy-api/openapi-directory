package openapisdk.models.shared;


public enum VideoMetadataVastVersionEnum {
    VAST_VERSION_UNSPECIFIED("VAST_VERSION_UNSPECIFIED"),
    VAST_VERSION10("VAST_VERSION_1_0"),
    VAST_VERSION20("VAST_VERSION_2_0"),
    VAST_VERSION30("VAST_VERSION_3_0"),
    VAST_VERSION40("VAST_VERSION_4_0");

    public final String value;

    private VideoMetadataVastVersionEnum(String value) {
        this.value = value;
    }
}
