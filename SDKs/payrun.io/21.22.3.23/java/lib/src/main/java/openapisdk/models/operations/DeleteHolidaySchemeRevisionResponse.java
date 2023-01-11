package openapisdk.models.operations;



public class DeleteHolidaySchemeRevisionResponse {
    public String contentType;
    public DeleteHolidaySchemeRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteHolidaySchemeRevisionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteHolidaySchemeRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}