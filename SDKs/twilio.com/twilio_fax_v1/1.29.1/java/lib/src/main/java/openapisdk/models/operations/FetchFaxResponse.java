package openapisdk.models.operations;



public class FetchFaxResponse {
    public String contentType;
    public FetchFaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FaxV1Fax faxV1Fax;
    public FetchFaxResponse withFaxV1Fax(openapisdk.models.shared.FaxV1Fax faxV1Fax) {
        this.faxV1Fax = faxV1Fax;
        return this;
    }
}