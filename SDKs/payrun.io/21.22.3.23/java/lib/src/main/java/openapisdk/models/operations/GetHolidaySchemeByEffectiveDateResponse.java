package openapisdk.models.operations;



public class GetHolidaySchemeByEffectiveDateResponse {
    public String contentType;
    public GetHolidaySchemeByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHolidaySchemeByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.HolidayScheme holidayScheme;
    public GetHolidaySchemeByEffectiveDateResponse withHolidayScheme(openapisdk.models.shared.HolidayScheme holidayScheme) {
        this.holidayScheme = holidayScheme;
        return this;
    }
    public Long statusCode;
    public GetHolidaySchemeByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}