package openapisdk.models.shared;


public enum OutputFormatEnum {
    MP4("mp4"),
    GIF("gif"),
    MP3("mp3"),
    JPG("jpg"),
    PNG("png"),
    BMP("bmp");

    public final String value;

    private OutputFormatEnum(String value) {
        this.value = value;
    }
}
