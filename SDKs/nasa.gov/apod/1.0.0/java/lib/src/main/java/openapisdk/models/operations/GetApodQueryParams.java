package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetApodQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hd")
    public Boolean hd;
    public GetApodQueryParams withHd(Boolean hd) {
        this.hd = hd;
        return this;
    }
}