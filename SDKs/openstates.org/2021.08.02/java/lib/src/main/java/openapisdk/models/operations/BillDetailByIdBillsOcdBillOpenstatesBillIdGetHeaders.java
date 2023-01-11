package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}