package openapisdk.models.operations;



public class ListLicenseesResponse {
    public byte[] body;
    public ListLicenseesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListLicenseesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListLicenseesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListLicenseesResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}