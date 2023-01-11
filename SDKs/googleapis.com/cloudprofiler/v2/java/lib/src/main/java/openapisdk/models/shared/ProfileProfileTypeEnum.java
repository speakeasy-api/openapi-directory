package openapisdk.models.shared;


public enum ProfileProfileTypeEnum {
    PROFILE_TYPE_UNSPECIFIED("PROFILE_TYPE_UNSPECIFIED"),
    CPU("CPU"),
    WALL("WALL"),
    HEAP("HEAP"),
    THREADS("THREADS"),
    CONTENTION("CONTENTION"),
    PEAK_HEAP("PEAK_HEAP"),
    HEAP_ALLOC("HEAP_ALLOC");

    public final String value;

    private ProfileProfileTypeEnum(String value) {
        this.value = value;
    }
}
