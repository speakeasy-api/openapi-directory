package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillDetailBillsJurisdictionSessionBillIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bill_id")
    public String billId;
    public BillDetailBillsJurisdictionSessionBillIdGetPathParams withBillId(String billId) {
        this.billId = billId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jurisdiction")
    public String jurisdiction;
    public BillDetailBillsJurisdictionSessionBillIdGetPathParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=session")
    public String session;
    public BillDetailBillsJurisdictionSessionBillIdGetPathParams withSession(String session) {
        this.session = session;
        return this;
    }
}