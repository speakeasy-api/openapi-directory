package openapisdk.models.shared;


public enum FedexPickupTypeEnum {
    NONE("none"),
    REGULAR_PICKUP("regular_pickup"),
    REQUEST_COURIER("request_courier"),
    DROP_BOX("drop_box"),
    BUSINESS_SERVICE_CENTER("business_service_center"),
    STATION("station");

    public final String value;

    private FedexPickupTypeEnum(String value) {
        this.value = value;
    }
}
