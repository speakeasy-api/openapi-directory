package openapisdk.models.operations;



public class PeoplePeopleUpdateContactPhotoResponse {
    public String contentType;
    public PeoplePeopleUpdateContactPhotoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleUpdateContactPhotoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateContactPhotoResponse updateContactPhotoResponse;
    public PeoplePeopleUpdateContactPhotoResponse withUpdateContactPhotoResponse(openapisdk.models.shared.UpdateContactPhotoResponse updateContactPhotoResponse) {
        this.updateContactPhotoResponse = updateContactPhotoResponse;
        return this;
    }
}