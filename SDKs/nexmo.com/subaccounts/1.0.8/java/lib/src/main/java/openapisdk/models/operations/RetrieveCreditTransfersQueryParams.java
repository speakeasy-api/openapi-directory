package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveCreditTransfersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public RetrieveCreditTransfersQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public RetrieveCreditTransfersQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subaccount")
    public String subaccount;
    public RetrieveCreditTransfersQueryParams withSubaccount(String subaccount) {
        this.subaccount = subaccount;
        return this;
    }
}