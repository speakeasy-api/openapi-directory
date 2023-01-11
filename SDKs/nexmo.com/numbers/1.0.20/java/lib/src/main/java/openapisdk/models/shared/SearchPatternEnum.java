package openapisdk.models.shared;


public enum SearchPatternEnum {
    SMS("SMS"),
    VOICE("VOICE"),
    SMS_VOICE("SMS,VOICE"),
    MMS("MMS"),
    SMS_MMS("SMS,MMS"),
    VOICE_MMS("VOICE,MMS"),
    SMS_MMS_VOICE("SMS,MMS,VOICE");

    public final String value;

    private SearchPatternEnum(String value) {
        this.value = value;
    }
}
