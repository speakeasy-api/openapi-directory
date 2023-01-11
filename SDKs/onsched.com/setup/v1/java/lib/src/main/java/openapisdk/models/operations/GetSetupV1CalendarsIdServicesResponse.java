package openapisdk.models.operations;



public class GetSetupV1CalendarsIdServicesResponse {
    public String contentType;
    public GetSetupV1CalendarsIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> serviceListViewModel;
    public GetSetupV1CalendarsIdServicesResponse withServiceListViewModel(java.util.Map<String, Object> serviceListViewModel) {
        this.serviceListViewModel = serviceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CalendarsIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}