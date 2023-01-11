package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWirelessLaNsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetWirelessLaNsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}