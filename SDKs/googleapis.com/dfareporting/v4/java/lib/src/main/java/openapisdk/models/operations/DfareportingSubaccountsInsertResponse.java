package openapisdk.models.operations;



public class DfareportingSubaccountsInsertResponse {
    public String contentType;
    public DfareportingSubaccountsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingSubaccountsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subaccount subaccount;
    public DfareportingSubaccountsInsertResponse withSubaccount(openapisdk.models.shared.Subaccount subaccount) {
        this.subaccount = subaccount;
        return this;
    }
}