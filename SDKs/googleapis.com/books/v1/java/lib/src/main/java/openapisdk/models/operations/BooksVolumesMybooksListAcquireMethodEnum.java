package openapisdk.models.operations;


public enum BooksVolumesMybooksListAcquireMethodEnum {
    ACQUIRE_METHOD_UNDEFINED("ACQUIRE_METHOD_UNDEFINED"),
    FAMILY_SHARED("FAMILY_SHARED"),
    PREORDERED("PREORDERED"),
    PREVIOUSLY_RENTED("PREVIOUSLY_RENTED"),
    PUBLIC_DOMAIN("PUBLIC_DOMAIN"),
    PURCHASED("PURCHASED"),
    RENTED("RENTED"),
    SAMPLE("SAMPLE"),
    UPLOADED("UPLOADED");

    public final String value;

    private BooksVolumesMybooksListAcquireMethodEnum(String value) {
        this.value = value;
    }
}
