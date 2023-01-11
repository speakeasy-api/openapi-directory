package openapisdk.models.operations;



public class GetLocationRuleByIdResponse {
    public String contentType;
    public GetLocationRuleByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationRule locationRule;
    public GetLocationRuleByIdResponse withLocationRule(openapisdk.models.shared.LocationRule locationRule) {
        this.locationRule = locationRule;
        return this;
    }
    public Long statusCode;
    public GetLocationRuleByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}