package openapisdk.models.operations;



public class BooksMyconfigSyncVolumeLicensesResponse {
    public String contentType;
    public BooksMyconfigSyncVolumeLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMyconfigSyncVolumeLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksMyconfigSyncVolumeLicensesResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}