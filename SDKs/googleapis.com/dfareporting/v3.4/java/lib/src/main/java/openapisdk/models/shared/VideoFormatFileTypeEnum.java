package openapisdk.models.shared;


public enum VideoFormatFileTypeEnum {
    FLV("FLV"),
    THREEGPP("THREEGPP"),
    MP4("MP4"),
    WEBM("WEBM"),
    M3_U8("M3U8");

    public final String value;

    private VideoFormatFileTypeEnum(String value) {
        this.value = value;
    }
}
