package openapisdk.models.operations;



public class GetSetupV1CustomersIdPrivacyResponse {
    public String contentType;
    public GetSetupV1CustomersIdPrivacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customerPrivacyViewModel;
    public GetSetupV1CustomersIdPrivacyResponse withCustomerPrivacyViewModel(java.util.Map<String, Object> customerPrivacyViewModel) {
        this.customerPrivacyViewModel = customerPrivacyViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CustomersIdPrivacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}