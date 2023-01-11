package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=calledByBuild")
    public Boolean calledByBuild;
    public GetResourcesMediaIdContentQueryParams withCalledByBuild(Boolean calledByBuild) {
        this.calledByBuild = calledByBuild;
        return this;
    }
}