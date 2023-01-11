package openapisdk.models.operations;



public class BooksFamilysharingGetFamilyInfoResponse {
    public String contentType;
    public BooksFamilysharingGetFamilyInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FamilyInfo familyInfo;
    public BooksFamilysharingGetFamilyInfoResponse withFamilyInfo(openapisdk.models.shared.FamilyInfo familyInfo) {
        this.familyInfo = familyInfo;
        return this;
    }
    public Long statusCode;
    public BooksFamilysharingGetFamilyInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}