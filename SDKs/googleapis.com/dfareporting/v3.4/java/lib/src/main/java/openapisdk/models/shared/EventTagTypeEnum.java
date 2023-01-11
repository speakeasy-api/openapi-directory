package openapisdk.models.shared;


public enum EventTagTypeEnum {
    IMPRESSION_IMAGE_EVENT_TAG("IMPRESSION_IMAGE_EVENT_TAG"),
    IMPRESSION_JAVASCRIPT_EVENT_TAG("IMPRESSION_JAVASCRIPT_EVENT_TAG"),
    CLICK_THROUGH_EVENT_TAG("CLICK_THROUGH_EVENT_TAG");

    public final String value;

    private EventTagTypeEnum(String value) {
        this.value = value;
    }
}
