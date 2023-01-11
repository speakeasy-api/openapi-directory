package openapisdk.models.shared;


public enum ServiceAreaBusinessBusinessTypeEnum {
    BUSINESS_TYPE_UNSPECIFIED("BUSINESS_TYPE_UNSPECIFIED"),
    CUSTOMER_LOCATION_ONLY("CUSTOMER_LOCATION_ONLY"),
    CUSTOMER_AND_BUSINESS_LOCATION("CUSTOMER_AND_BUSINESS_LOCATION");

    public final String value;

    private ServiceAreaBusinessBusinessTypeEnum(String value) {
        this.value = value;
    }
}
