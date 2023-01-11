package openapisdk.models.shared;


public enum GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum {
    NOTIFICATION_CATEGORY_UNSPECIFIED("NOTIFICATION_CATEGORY_UNSPECIFIED"),
    ALL("ALL"),
    SUSPENSION("SUSPENSION"),
    SECURITY("SECURITY"),
    TECHNICAL("TECHNICAL"),
    BILLING("BILLING"),
    LEGAL("LEGAL"),
    PRODUCT_UPDATES("PRODUCT_UPDATES"),
    TECHNICAL_INCIDENTS("TECHNICAL_INCIDENTS");

    public final String value;

    private GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum(String value) {
        this.value = value;
    }
}
