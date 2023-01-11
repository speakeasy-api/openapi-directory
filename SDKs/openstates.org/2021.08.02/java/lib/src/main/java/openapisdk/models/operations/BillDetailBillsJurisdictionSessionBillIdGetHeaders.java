package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillDetailBillsJurisdictionSessionBillIdGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public BillDetailBillsJurisdictionSessionBillIdGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}