package openapisdk.models.operations;



public class GenderChineseNameResponse {
    public String contentType;
    public GenderChineseNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut;
    public GenderChineseNameResponse withPersonalNameGenderedOut(openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut) {
        this.personalNameGenderedOut = personalNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderChineseNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}