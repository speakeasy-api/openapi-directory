package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsValidateExclusivityResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsValidateExclusivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsValidateExclusivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidateExclusivityResponse validateExclusivityResponse;
    public GkehubProjectsLocationsMembershipsValidateExclusivityResponse withValidateExclusivityResponse(openapisdk.models.shared.ValidateExclusivityResponse validateExclusivityResponse) {
        this.validateExclusivityResponse = validateExclusivityResponse;
        return this;
    }
}