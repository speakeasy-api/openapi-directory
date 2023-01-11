package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveBalanceTransfersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public RetrieveBalanceTransfersQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public RetrieveBalanceTransfersQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subaccount")
    public String subaccount;
    public RetrieveBalanceTransfersQueryParams withSubaccount(String subaccount) {
        this.subaccount = subaccount;
        return this;
    }
}