package openapisdk.models.operations;



public class DeleteHolidaySchemeResponse {
    public String contentType;
    public DeleteHolidaySchemeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteHolidaySchemeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteHolidaySchemeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}