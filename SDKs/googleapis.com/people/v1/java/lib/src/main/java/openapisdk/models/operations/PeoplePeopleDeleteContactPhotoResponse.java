package openapisdk.models.operations;



public class PeoplePeopleDeleteContactPhotoResponse {
    public String contentType;
    public PeoplePeopleDeleteContactPhotoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteContactPhotoResponse deleteContactPhotoResponse;
    public PeoplePeopleDeleteContactPhotoResponse withDeleteContactPhotoResponse(openapisdk.models.shared.DeleteContactPhotoResponse deleteContactPhotoResponse) {
        this.deleteContactPhotoResponse = deleteContactPhotoResponse;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleDeleteContactPhotoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}