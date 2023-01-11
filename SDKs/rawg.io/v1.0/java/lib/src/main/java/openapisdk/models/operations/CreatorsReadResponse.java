package openapisdk.models.operations;



public class CreatorsReadResponse {
    public String contentType;
    public CreatorsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonSingle personSingle;
    public CreatorsReadResponse withPersonSingle(openapisdk.models.shared.PersonSingle personSingle) {
        this.personSingle = personSingle;
        return this;
    }
    public Long statusCode;
    public CreatorsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}