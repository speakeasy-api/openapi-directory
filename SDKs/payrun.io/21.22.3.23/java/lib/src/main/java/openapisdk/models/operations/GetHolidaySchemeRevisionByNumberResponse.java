package openapisdk.models.operations;



public class GetHolidaySchemeRevisionByNumberResponse {
    public String contentType;
    public GetHolidaySchemeRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHolidaySchemeRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.HolidayScheme holidayScheme;
    public GetHolidaySchemeRevisionByNumberResponse withHolidayScheme(openapisdk.models.shared.HolidayScheme holidayScheme) {
        this.holidayScheme = holidayScheme;
        return this;
    }
    public Long statusCode;
    public GetHolidaySchemeRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}