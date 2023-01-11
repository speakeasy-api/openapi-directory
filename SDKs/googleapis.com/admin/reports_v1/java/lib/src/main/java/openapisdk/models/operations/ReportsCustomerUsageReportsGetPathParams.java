package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsCustomerUsageReportsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ReportsCustomerUsageReportsGetPathParams withDate(String date) {
        this.date = date;
        return this;
    }
}