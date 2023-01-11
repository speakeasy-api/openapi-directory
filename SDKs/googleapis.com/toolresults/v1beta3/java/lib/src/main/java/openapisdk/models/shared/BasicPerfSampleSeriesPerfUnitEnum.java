package openapisdk.models.shared;


public enum BasicPerfSampleSeriesPerfUnitEnum {
    PERF_UNIT_UNSPECIFIED("perfUnitUnspecified"),
    KIBIBYTE("kibibyte"),
    PERCENT("percent"),
    BYTES_PER_SECOND("bytesPerSecond"),
    FRAMES_PER_SECOND("framesPerSecond"),
    BYTE("byte");

    public final String value;

    private BasicPerfSampleSeriesPerfUnitEnum(String value) {
        this.value = value;
    }
}
