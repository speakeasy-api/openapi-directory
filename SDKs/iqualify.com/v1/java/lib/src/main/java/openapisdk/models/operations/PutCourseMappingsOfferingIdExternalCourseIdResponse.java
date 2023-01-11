package openapisdk.models.operations;



public class PutCourseMappingsOfferingIdExternalCourseIdResponse {
    public String contentType;
    public PutCourseMappingsOfferingIdExternalCourseIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutCourseMappingsOfferingIdExternalCourseIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutCourseMappingsOfferingIdExternalCourseIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings;
    public PutCourseMappingsOfferingIdExternalCourseIdResponse withPutCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings(String[] putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings) {
        this.putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings = putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings;
        return this;
    }
}