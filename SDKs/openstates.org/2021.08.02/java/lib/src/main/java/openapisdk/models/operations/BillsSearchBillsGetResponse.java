package openapisdk.models.operations;



public class BillsSearchBillsGetResponse {
    public openapisdk.models.shared.BillList billList;
    public BillsSearchBillsGetResponse withBillList(openapisdk.models.shared.BillList billList) {
        this.billList = billList;
        return this;
    }
    public String contentType;
    public BillsSearchBillsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public BillsSearchBillsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public BillsSearchBillsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}