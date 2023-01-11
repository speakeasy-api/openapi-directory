package openapisdk.models.operations;



public class TransferLicensesResponse {
    public byte[] body;
    public TransferLicensesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TransferLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TransferLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public TransferLicensesResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}