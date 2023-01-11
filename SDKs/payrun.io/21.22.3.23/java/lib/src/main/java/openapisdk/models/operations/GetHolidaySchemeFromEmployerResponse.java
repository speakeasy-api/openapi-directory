package openapisdk.models.operations;



public class GetHolidaySchemeFromEmployerResponse {
    public String contentType;
    public GetHolidaySchemeFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHolidaySchemeFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.HolidayScheme holidayScheme;
    public GetHolidaySchemeFromEmployerResponse withHolidayScheme(openapisdk.models.shared.HolidayScheme holidayScheme) {
        this.holidayScheme = holidayScheme;
        return this;
    }
    public Long statusCode;
    public GetHolidaySchemeFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}