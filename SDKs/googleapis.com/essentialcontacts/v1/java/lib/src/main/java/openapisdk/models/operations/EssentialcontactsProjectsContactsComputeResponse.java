package openapisdk.models.operations;



public class EssentialcontactsProjectsContactsComputeResponse {
    public String contentType;
    public EssentialcontactsProjectsContactsComputeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse googleCloudEssentialcontactsV1ComputeContactsResponse;
    public EssentialcontactsProjectsContactsComputeResponse withGoogleCloudEssentialcontactsV1ComputeContactsResponse(openapisdk.models.shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse googleCloudEssentialcontactsV1ComputeContactsResponse) {
        this.googleCloudEssentialcontactsV1ComputeContactsResponse = googleCloudEssentialcontactsV1ComputeContactsResponse;
        return this;
    }
    public Long statusCode;
    public EssentialcontactsProjectsContactsComputeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}