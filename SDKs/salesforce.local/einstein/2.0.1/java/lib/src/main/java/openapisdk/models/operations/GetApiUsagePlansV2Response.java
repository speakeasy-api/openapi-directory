package openapisdk.models.operations;



public class GetApiUsagePlansV2Response {
    public openapisdk.models.shared.ApiUsageList apiUsageList;
    public GetApiUsagePlansV2Response withApiUsageList(openapisdk.models.shared.ApiUsageList apiUsageList) {
        this.apiUsageList = apiUsageList;
        return this;
    }
    public String contentType;
    public GetApiUsagePlansV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiUsagePlansV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}