package openapisdk.models.operations;



public class PutSetupV1ServicesIdAvailabilityResponse {
    public String contentType;
    public PutSetupV1ServicesIdAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAvailabilityViewModel serviceAvailabilityViewModel;
    public PutSetupV1ServicesIdAvailabilityResponse withServiceAvailabilityViewModel(openapisdk.models.shared.ServiceAvailabilityViewModel serviceAvailabilityViewModel) {
        this.serviceAvailabilityViewModel = serviceAvailabilityViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ServicesIdAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}