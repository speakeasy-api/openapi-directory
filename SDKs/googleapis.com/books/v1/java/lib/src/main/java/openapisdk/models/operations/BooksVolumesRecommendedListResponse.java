package openapisdk.models.operations;



public class BooksVolumesRecommendedListResponse {
    public String contentType;
    public BooksVolumesRecommendedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksVolumesRecommendedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksVolumesRecommendedListResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}