package openapisdk.models.operations;



public class GetSetupV1ResourcesTimezonesResponse {
    public String contentType;
    public GetSetupV1ResourcesTimezonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesTimezonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SystemTimezoneViewModel systemTimezoneViewModel;
    public GetSetupV1ResourcesTimezonesResponse withSystemTimezoneViewModel(openapisdk.models.shared.SystemTimezoneViewModel systemTimezoneViewModel) {
        this.systemTimezoneViewModel = systemTimezoneViewModel;
        return this;
    }
}