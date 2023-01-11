package openapisdk.models.shared;


public enum ChannelStatusLongUploadsStatusEnum {
    LONG_UPLOADS_UNSPECIFIED("longUploadsUnspecified"),
    ALLOWED("allowed"),
    ELIGIBLE("eligible"),
    DISALLOWED("disallowed");

    public final String value;

    private ChannelStatusLongUploadsStatusEnum(String value) {
        this.value = value;
    }
}
