package openapisdk.models.shared;


public enum CredentialEnumPushTypeEnum {
    APN("apn"),
    GCM("gcm"),
    FCM("fcm");

    public final String value;

    private CredentialEnumPushTypeEnum(String value) {
        this.value = value;
    }
}
