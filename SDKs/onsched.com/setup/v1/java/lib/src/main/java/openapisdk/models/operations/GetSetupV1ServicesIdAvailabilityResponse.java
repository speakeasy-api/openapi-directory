package openapisdk.models.operations;



public class GetSetupV1ServicesIdAvailabilityResponse {
    public String contentType;
    public GetSetupV1ServicesIdAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAvailabilityViewModel serviceAvailabilityViewModel;
    public GetSetupV1ServicesIdAvailabilityResponse withServiceAvailabilityViewModel(openapisdk.models.shared.ServiceAvailabilityViewModel serviceAvailabilityViewModel) {
        this.serviceAvailabilityViewModel = serviceAvailabilityViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesIdAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}