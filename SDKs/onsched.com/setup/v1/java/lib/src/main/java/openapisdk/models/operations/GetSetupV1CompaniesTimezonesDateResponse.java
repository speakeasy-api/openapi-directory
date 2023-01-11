package openapisdk.models.operations;



public class GetSetupV1CompaniesTimezonesDateResponse {
    public String contentType;
    public GetSetupV1CompaniesTimezonesDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesTimezonesDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TimezoneViewModel timezoneViewModel;
    public GetSetupV1CompaniesTimezonesDateResponse withTimezoneViewModel(openapisdk.models.shared.TimezoneViewModel timezoneViewModel) {
        this.timezoneViewModel = timezoneViewModel;
        return this;
    }
}