package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillDetailBillsJurisdictionSessionBillIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public BillDetailBillsJurisdictionSessionBillIdGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.BillIncludeEnum[] include;
    public BillDetailBillsJurisdictionSessionBillIdGetQueryParams withInclude(openapisdk.models.shared.BillIncludeEnum[] include) {
        this.include = include;
        return this;
    }
}