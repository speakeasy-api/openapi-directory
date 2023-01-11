package openapisdk.models.operations;


public enum GetSitesNearOutputFormatLocationDescriptorEnum {
    ANY("any"),
    ACCESS_POINT("accessPoint"),
    FRONT_DOOR_POINT("frontDoorPoint"),
    PARCEL_POINT("parcelPoint"),
    ROOFTOP_POINT("rooftopPoint"),
    ROUTING_POINT("routingPoint");

    public final String value;

    private GetSitesNearOutputFormatLocationDescriptorEnum(String value) {
        this.value = value;
    }
}
