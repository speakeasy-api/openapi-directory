package openapisdk.models.operations;



public class GetCcLicensesResponse {
    public String contentType;
    public GetCcLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCcLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreativeCommons[] creativeCommons;
    public GetCcLicensesResponse withCreativeCommons(openapisdk.models.shared.CreativeCommons[] creativeCommons) {
        this.creativeCommons = creativeCommons;
        return this;
    }
}