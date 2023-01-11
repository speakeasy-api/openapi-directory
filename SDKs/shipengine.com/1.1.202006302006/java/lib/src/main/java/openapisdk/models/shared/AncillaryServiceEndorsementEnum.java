package openapisdk.models.shared;


public enum AncillaryServiceEndorsementEnum {
    NONE("none"),
    RETURN_SERVICE_REQUESTED("return_service_requested"),
    FORWARDING_SERVICE_REQUESTED("forwarding_service_requested"),
    ADDRESS_SERVICE_REQUESTED("address_service_requested"),
    CHANGE_SERVICE_REQUESTED("change_service_requested"),
    LEAVE_IF_NO_RESPONSE("leave_if_no_response");

    public final String value;

    private AncillaryServiceEndorsementEnum(String value) {
        this.value = value;
    }
}
