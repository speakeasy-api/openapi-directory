package openapisdk.models.shared;


public enum BindingEnumBindingTypeEnum {
    APN("apn"),
    GCM("gcm"),
    SMS("sms"),
    FCM("fcm"),
    FACEBOOK_MESSENGER("facebook-messenger"),
    ALEXA("alexa");

    public final String value;

    private BindingEnumBindingTypeEnum(String value) {
        this.value = value;
    }
}
