package openapisdk.models.shared;


public enum ServiceBindingEnumBindingTypeEnum {
    APN("apn"),
    GCM("gcm"),
    FCM("fcm");

    public final String value;

    private ServiceBindingEnumBindingTypeEnum(String value) {
        this.value = value;
    }
}
