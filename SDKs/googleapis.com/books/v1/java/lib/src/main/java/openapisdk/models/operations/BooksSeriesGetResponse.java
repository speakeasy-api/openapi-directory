package openapisdk.models.operations;



public class BooksSeriesGetResponse {
    public String contentType;
    public BooksSeriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Series series;
    public BooksSeriesGetResponse withSeries(openapisdk.models.shared.Series series) {
        this.series = series;
        return this;
    }
    public Long statusCode;
    public BooksSeriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}