package openapisdk.models.operations;



public class PatchHolidaySchemeResponse {
    public String contentType;
    public PatchHolidaySchemeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchHolidaySchemeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.HolidayScheme holidayScheme;
    public PatchHolidaySchemeResponse withHolidayScheme(openapisdk.models.shared.HolidayScheme holidayScheme) {
        this.holidayScheme = holidayScheme;
        return this;
    }
    public Long statusCode;
    public PatchHolidaySchemeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}