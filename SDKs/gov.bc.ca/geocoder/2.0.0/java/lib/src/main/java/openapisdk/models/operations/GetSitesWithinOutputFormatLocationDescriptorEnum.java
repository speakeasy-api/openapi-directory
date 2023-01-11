package openapisdk.models.operations;


public enum GetSitesWithinOutputFormatLocationDescriptorEnum {
    ANY("any"),
    ACCESS_POINT("accessPoint"),
    FRONT_DOOR_POINT("frontDoorPoint"),
    PARCEL_POINT("parcelPoint"),
    ROOFTOP_POINT("rooftopPoint"),
    ROUTING_POINT("routingPoint");

    public final String value;

    private GetSitesWithinOutputFormatLocationDescriptorEnum(String value) {
        this.value = value;
    }
}
