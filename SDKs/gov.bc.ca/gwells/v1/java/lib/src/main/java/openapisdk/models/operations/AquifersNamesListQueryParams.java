package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AquifersNamesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public AquifersNamesListQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}