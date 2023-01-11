package openapisdk.models.operations;



public class BillDetailBillsJurisdictionSessionBillIdGetResponse {
    public openapisdk.models.shared.Bill bill;
    public BillDetailBillsJurisdictionSessionBillIdGetResponse withBill(openapisdk.models.shared.Bill bill) {
        this.bill = bill;
        return this;
    }
    public String contentType;
    public BillDetailBillsJurisdictionSessionBillIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public BillDetailBillsJurisdictionSessionBillIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public BillDetailBillsJurisdictionSessionBillIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}