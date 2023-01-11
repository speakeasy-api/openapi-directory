package openapisdk.models.operations;



public class GenderJapaneseNameFullResponse {
    public String contentType;
    public GenderJapaneseNameFullResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut;
    public GenderJapaneseNameFullResponse withPersonalNameGenderedOut(openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut) {
        this.personalNameGenderedOut = personalNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderJapaneseNameFullResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}