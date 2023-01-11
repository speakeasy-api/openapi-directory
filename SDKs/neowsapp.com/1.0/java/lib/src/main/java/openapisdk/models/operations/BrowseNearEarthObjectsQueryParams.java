package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BrowseNearEarthObjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public BrowseNearEarthObjectsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Integer size;
    public BrowseNearEarthObjectsQueryParams withSize(Integer size) {
        this.size = size;
        return this;
    }
}