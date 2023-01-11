package openapisdk.models.shared;


public enum ServiceTypeEnum {
    SERVICE("service"),
    PICKUP("pickup"),
    DELIVERY("delivery");

    public final String value;

    private ServiceTypeEnum(String value) {
        this.value = value;
    }
}
