package openapisdk.models.operations;



public class BooksOnboardingListCategoryVolumesResponse {
    public String contentType;
    public BooksOnboardingListCategoryVolumesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksOnboardingListCategoryVolumesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volume2 volume2;
    public BooksOnboardingListCategoryVolumesResponse withVolume2(openapisdk.models.shared.Volume2 volume2) {
        this.volume2 = volume2;
        return this;
    }
}