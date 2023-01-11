package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectAnalyticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CollectAnalyticsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}