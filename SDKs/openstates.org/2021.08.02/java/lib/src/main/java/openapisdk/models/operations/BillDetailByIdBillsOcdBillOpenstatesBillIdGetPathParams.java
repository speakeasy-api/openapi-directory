package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=openstates_bill_id")
    public String openstatesBillId;
    public BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams withOpenstatesBillId(String openstatesBillId) {
        this.openstatesBillId = openstatesBillId;
        return this;
    }
}