package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFeaturesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public ListFeaturesQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public ListFeaturesQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public ListFeaturesQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public ListFeaturesQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}