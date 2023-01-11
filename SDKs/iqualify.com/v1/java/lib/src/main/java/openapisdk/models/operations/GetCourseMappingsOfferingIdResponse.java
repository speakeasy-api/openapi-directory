package openapisdk.models.operations;



public class GetCourseMappingsOfferingIdResponse {
    public String contentType;
    public GetCourseMappingsOfferingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCourseMappingsOfferingIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCourseMappingsOfferingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getCourseMappingsOfferingId200ApplicationJSONStrings;
    public GetCourseMappingsOfferingIdResponse withGetCourseMappingsOfferingId200ApplicationJsonStrings(String[] getCourseMappingsOfferingId200ApplicationJSONStrings) {
        this.getCourseMappingsOfferingId200ApplicationJSONStrings = getCourseMappingsOfferingId200ApplicationJSONStrings;
        return this;
    }
}