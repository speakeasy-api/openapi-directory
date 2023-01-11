package openapisdk.models.operations;



public class SmartdevicemanagementEnterprisesStructuresRoomsGetResponse {
    public String contentType;
    public SmartdevicemanagementEnterprisesStructuresRoomsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleHomeEnterpriseSdmV1Room googleHomeEnterpriseSdmV1Room;
    public SmartdevicemanagementEnterprisesStructuresRoomsGetResponse withGoogleHomeEnterpriseSdmV1Room(openapisdk.models.shared.GoogleHomeEnterpriseSdmV1Room googleHomeEnterpriseSdmV1Room) {
        this.googleHomeEnterpriseSdmV1Room = googleHomeEnterpriseSdmV1Room;
        return this;
    }
    public Long statusCode;
    public SmartdevicemanagementEnterprisesStructuresRoomsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}