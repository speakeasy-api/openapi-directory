package openapisdk.models.operations;



public class BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse {
    public openapisdk.models.shared.Bill bill;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse withBill(openapisdk.models.shared.Bill bill) {
        this.bill = bill;
        return this;
    }
    public String contentType;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}