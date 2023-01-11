package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillsSearchBillsGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public BillsSearchBillsGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}