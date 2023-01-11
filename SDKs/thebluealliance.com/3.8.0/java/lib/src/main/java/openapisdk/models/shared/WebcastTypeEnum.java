package openapisdk.models.shared;


public enum WebcastTypeEnum {
    YOUTUBE("youtube"),
    TWITCH("twitch"),
    USTREAM("ustream"),
    IFRAME("iframe"),
    HTML5("html5"),
    RTMP("rtmp"),
    LIVESTREAM("livestream"),
    DIRECT_LINK("direct_link"),
    MMS("mms"),
    JUSTIN("justin"),
    STEMTV("stemtv"),
    DACAST("dacast");

    public final String value;

    private WebcastTypeEnum(String value) {
        this.value = value;
    }
}
