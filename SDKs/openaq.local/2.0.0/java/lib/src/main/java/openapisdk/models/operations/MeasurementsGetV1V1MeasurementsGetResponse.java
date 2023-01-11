package openapisdk.models.operations;



public class MeasurementsGetV1V1MeasurementsGetResponse {
    public String contentType;
    public MeasurementsGetV1V1MeasurementsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public MeasurementsGetV1V1MeasurementsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public MeasurementsGetV1V1MeasurementsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object measurementsGetV1V1MeasurementsGet200ApplicationJSONAny;
    public MeasurementsGetV1V1MeasurementsGetResponse withMeasurementsGetV1V1MeasurementsGet200ApplicationJsonAny(Object measurementsGetV1V1MeasurementsGet200ApplicationJSONAny) {
        this.measurementsGetV1V1MeasurementsGet200ApplicationJSONAny = measurementsGetV1V1MeasurementsGet200ApplicationJSONAny;
        return this;
    }
}