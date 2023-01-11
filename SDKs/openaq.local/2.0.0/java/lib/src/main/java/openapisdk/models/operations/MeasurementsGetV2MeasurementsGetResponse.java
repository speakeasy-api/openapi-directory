package openapisdk.models.operations;



public class MeasurementsGetV2MeasurementsGetResponse {
    public String contentType;
    public MeasurementsGetV2MeasurementsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public MeasurementsGetV2MeasurementsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public MeasurementsGetV2MeasurementsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object measurementsGetV2MeasurementsGet200ApplicationJSONAny;
    public MeasurementsGetV2MeasurementsGetResponse withMeasurementsGetV2MeasurementsGet200ApplicationJsonAny(Object measurementsGetV2MeasurementsGet200ApplicationJSONAny) {
        this.measurementsGetV2MeasurementsGet200ApplicationJSONAny = measurementsGetV2MeasurementsGet200ApplicationJSONAny;
        return this;
    }
}