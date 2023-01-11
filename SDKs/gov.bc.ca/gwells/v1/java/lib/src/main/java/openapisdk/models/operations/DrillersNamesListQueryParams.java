package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrillersNamesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public DrillersNamesListQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}