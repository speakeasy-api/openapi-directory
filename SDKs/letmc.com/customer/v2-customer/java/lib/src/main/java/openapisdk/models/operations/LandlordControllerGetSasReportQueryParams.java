package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetSasReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetSasReportQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=yearEnd")
    public Integer yearEnd;
    public LandlordControllerGetSasReportQueryParams withYearEnd(Integer yearEnd) {
        this.yearEnd = yearEnd;
        return this;
    }
}