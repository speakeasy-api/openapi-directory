package openapisdk.models.operations;



public class GetCourseMappingsExternalcourseExternalCourseIdResponse {
    public String contentType;
    public GetCourseMappingsExternalcourseExternalCourseIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCourseMappingsExternalcourseExternalCourseIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCourseMappingsExternalcourseExternalCourseIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings;
    public GetCourseMappingsExternalcourseExternalCourseIdResponse withGetCourseMappingsExternalcourseExternalCourseId200ApplicationJsonStrings(String[] getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings) {
        this.getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings = getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings;
        return this;
    }
}