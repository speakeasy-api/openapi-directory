package openapisdk.models.operations;



public class DeleteHolidaySchemeTagResponse {
    public String contentType;
    public DeleteHolidaySchemeTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteHolidaySchemeTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteHolidaySchemeTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}