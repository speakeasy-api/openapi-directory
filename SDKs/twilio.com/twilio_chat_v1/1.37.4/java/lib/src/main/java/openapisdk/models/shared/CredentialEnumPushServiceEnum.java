package openapisdk.models.shared;


public enum CredentialEnumPushServiceEnum {
    GCM("gcm"),
    APN("apn"),
    FCM("fcm");

    public final String value;

    private CredentialEnumPushServiceEnum(String value) {
        this.value = value;
    }
}
