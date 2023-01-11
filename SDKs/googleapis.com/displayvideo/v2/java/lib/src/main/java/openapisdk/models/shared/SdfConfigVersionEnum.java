package openapisdk.models.shared;


public enum SdfConfigVersionEnum {
    SDF_VERSION_UNSPECIFIED("SDF_VERSION_UNSPECIFIED"),
    SDF_VERSION31("SDF_VERSION_3_1"),
    SDF_VERSION4("SDF_VERSION_4"),
    SDF_VERSION41("SDF_VERSION_4_1"),
    SDF_VERSION42("SDF_VERSION_4_2"),
    SDF_VERSION5("SDF_VERSION_5"),
    SDF_VERSION51("SDF_VERSION_5_1"),
    SDF_VERSION52("SDF_VERSION_5_2"),
    SDF_VERSION53("SDF_VERSION_5_3"),
    SDF_VERSION54("SDF_VERSION_5_4"),
    SDF_VERSION55("SDF_VERSION_5_5");

    public final String value;

    private SdfConfigVersionEnum(String value) {
        this.value = value;
    }
}
