package openapisdk.models.operations;



public class CalendarColorsGetResponse {
    public openapisdk.models.shared.Colors colors;
    public CalendarColorsGetResponse withColors(openapisdk.models.shared.Colors colors) {
        this.colors = colors;
        return this;
    }
    public String contentType;
    public CalendarColorsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarColorsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}