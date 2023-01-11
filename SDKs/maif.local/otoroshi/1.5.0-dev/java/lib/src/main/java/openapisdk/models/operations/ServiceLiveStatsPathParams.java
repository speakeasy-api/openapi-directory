package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServiceLiveStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ServiceLiveStatsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}