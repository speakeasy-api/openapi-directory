package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.BillIncludeEnum[] include;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams withInclude(openapisdk.models.shared.BillIncludeEnum[] include) {
        this.include = include;
        return this;
    }
}