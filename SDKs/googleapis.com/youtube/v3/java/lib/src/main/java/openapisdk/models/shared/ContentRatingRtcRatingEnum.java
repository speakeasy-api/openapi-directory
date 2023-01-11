package openapisdk.models.shared;


public enum ContentRatingRtcRatingEnum {
    RTC_UNSPECIFIED("rtcUnspecified"),
    RTC_AA("rtcAa"),
    RTC_A("rtcA"),
    RTC_B("rtcB"),
    RTC_B15("rtcB15"),
    RTC_C("rtcC"),
    RTC_D("rtcD"),
    RTC_UNRATED("rtcUnrated");

    public final String value;

    private ContentRatingRtcRatingEnum(String value) {
        this.value = value;
    }
}
