package openapisdk.models.operations;



public class FetchFaxMediaResponse {
    public String contentType;
    public FetchFaxMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFaxMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FaxV1FaxFaxMedia faxV1FaxFaxMedia;
    public FetchFaxMediaResponse withFaxV1FaxFaxMedia(openapisdk.models.shared.FaxV1FaxFaxMedia faxV1FaxFaxMedia) {
        this.faxV1FaxFaxMedia = faxV1FaxFaxMedia;
        return this;
    }
}