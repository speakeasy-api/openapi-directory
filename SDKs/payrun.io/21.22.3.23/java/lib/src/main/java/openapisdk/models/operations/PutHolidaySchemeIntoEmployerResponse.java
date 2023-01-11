package openapisdk.models.operations;



public class PutHolidaySchemeIntoEmployerResponse {
    public String contentType;
    public PutHolidaySchemeIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutHolidaySchemeIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.HolidayScheme holidayScheme;
    public PutHolidaySchemeIntoEmployerResponse withHolidayScheme(openapisdk.models.shared.HolidayScheme holidayScheme) {
        this.holidayScheme = holidayScheme;
        return this;
    }
    public Long statusCode;
    public PutHolidaySchemeIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}