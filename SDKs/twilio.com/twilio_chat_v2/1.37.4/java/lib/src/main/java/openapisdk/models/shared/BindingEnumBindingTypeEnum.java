package openapisdk.models.shared;


public enum BindingEnumBindingTypeEnum {
    GCM("gcm"),
    APN("apn"),
    FCM("fcm");

    public final String value;

    private BindingEnumBindingTypeEnum(String value) {
        this.value = value;
    }
}
