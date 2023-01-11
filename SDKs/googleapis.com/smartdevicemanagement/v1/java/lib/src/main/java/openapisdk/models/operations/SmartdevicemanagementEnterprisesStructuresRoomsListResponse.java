package openapisdk.models.operations;



public class SmartdevicemanagementEnterprisesStructuresRoomsListResponse {
    public String contentType;
    public SmartdevicemanagementEnterprisesStructuresRoomsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse googleHomeEnterpriseSdmV1ListRoomsResponse;
    public SmartdevicemanagementEnterprisesStructuresRoomsListResponse withGoogleHomeEnterpriseSdmV1ListRoomsResponse(openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse googleHomeEnterpriseSdmV1ListRoomsResponse) {
        this.googleHomeEnterpriseSdmV1ListRoomsResponse = googleHomeEnterpriseSdmV1ListRoomsResponse;
        return this;
    }
    public Long statusCode;
    public SmartdevicemanagementEnterprisesStructuresRoomsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}