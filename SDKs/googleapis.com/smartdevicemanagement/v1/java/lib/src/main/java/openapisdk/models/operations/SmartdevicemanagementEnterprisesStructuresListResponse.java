package openapisdk.models.operations;



public class SmartdevicemanagementEnterprisesStructuresListResponse {
    public String contentType;
    public SmartdevicemanagementEnterprisesStructuresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse googleHomeEnterpriseSdmV1ListStructuresResponse;
    public SmartdevicemanagementEnterprisesStructuresListResponse withGoogleHomeEnterpriseSdmV1ListStructuresResponse(openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse googleHomeEnterpriseSdmV1ListStructuresResponse) {
        this.googleHomeEnterpriseSdmV1ListStructuresResponse = googleHomeEnterpriseSdmV1ListStructuresResponse;
        return this;
    }
    public Long statusCode;
    public SmartdevicemanagementEnterprisesStructuresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}