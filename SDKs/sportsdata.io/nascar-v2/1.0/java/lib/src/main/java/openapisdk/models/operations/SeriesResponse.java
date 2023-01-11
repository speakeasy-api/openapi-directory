package openapisdk.models.operations;



public class SeriesResponse {
    public String contentType;
    public SeriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] series;
    public SeriesResponse withSeries(Object[] series) {
        this.series = series;
        return this;
    }
    public Long statusCode;
    public SeriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}