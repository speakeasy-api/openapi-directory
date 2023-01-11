package openapisdk.models.shared;


public enum ClipFilterEnum {
    BOOST("boost"),
    CONTRAST("contrast"),
    DARKEN("darken"),
    GREYSCALE("greyscale"),
    LIGHTEN("lighten"),
    MUTED("muted"),
    NEGATIVE("negative");

    public final String value;

    private ClipFilterEnum(String value) {
        this.value = value;
    }
}
