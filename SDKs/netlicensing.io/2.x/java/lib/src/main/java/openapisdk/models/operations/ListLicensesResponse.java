package openapisdk.models.operations;



public class ListLicensesResponse {
    public byte[] body;
    public ListLicensesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListLicensesResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}