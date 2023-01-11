package openapisdk.models.operations;



public class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject;
    public EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse withEnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJsonObject(EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject) {
        this.enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject = enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject;
        return this;
    }
}