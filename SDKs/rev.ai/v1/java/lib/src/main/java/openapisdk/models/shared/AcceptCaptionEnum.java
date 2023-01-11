package openapisdk.models.shared;


public enum AcceptCaptionEnum {
    APPLICATION_X_SUBRIP("application/x-subrip"),
    TEXT_VTT("text/vtt");

    public final String value;

    private AcceptCaptionEnum(String value) {
        this.value = value;
    }
}
