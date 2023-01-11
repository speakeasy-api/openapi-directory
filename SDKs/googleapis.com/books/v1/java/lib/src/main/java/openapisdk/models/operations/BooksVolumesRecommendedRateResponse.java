package openapisdk.models.operations;



public class BooksVolumesRecommendedRateResponse {
    public openapisdk.models.shared.BooksVolumesRecommendedRateResponse booksVolumesRecommendedRateResponse;
    public BooksVolumesRecommendedRateResponse withBooksVolumesRecommendedRateResponse(openapisdk.models.shared.BooksVolumesRecommendedRateResponse booksVolumesRecommendedRateResponse) {
        this.booksVolumesRecommendedRateResponse = booksVolumesRecommendedRateResponse;
        return this;
    }
    public String contentType;
    public BooksVolumesRecommendedRateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksVolumesRecommendedRateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}