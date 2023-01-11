package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsValidateCreateResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsValidateCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsValidateCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidateCreateMembershipResponse validateCreateMembershipResponse;
    public GkehubProjectsLocationsMembershipsValidateCreateResponse withValidateCreateMembershipResponse(openapisdk.models.shared.ValidateCreateMembershipResponse validateCreateMembershipResponse) {
        this.validateCreateMembershipResponse = validateCreateMembershipResponse;
        return this;
    }
}