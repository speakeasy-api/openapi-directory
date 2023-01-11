package openapisdk.models.shared;


public enum UrlNotificationTypeEnum {
    URL_NOTIFICATION_TYPE_UNSPECIFIED("URL_NOTIFICATION_TYPE_UNSPECIFIED"),
    URL_UPDATED("URL_UPDATED"),
    URL_DELETED("URL_DELETED");

    public final String value;

    private UrlNotificationTypeEnum(String value) {
        this.value = value;
    }
}
