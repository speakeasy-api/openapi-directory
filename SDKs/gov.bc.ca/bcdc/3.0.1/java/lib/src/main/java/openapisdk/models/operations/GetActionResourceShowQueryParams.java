package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionResourceShowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionResourceShowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_tracking")
    public Boolean includeTracking;
    public GetActionResourceShowQueryParams withIncludeTracking(Boolean includeTracking) {
        this.includeTracking = includeTracking;
        return this;
    }
}