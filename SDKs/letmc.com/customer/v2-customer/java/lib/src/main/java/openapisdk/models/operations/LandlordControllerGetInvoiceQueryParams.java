package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetInvoiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=invoiceID")
    public String invoiceID;
    public LandlordControllerGetInvoiceQueryParams withInvoiceId(String invoiceID) {
        this.invoiceID = invoiceID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetInvoiceQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}