package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnalyticsTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetAnalyticsTokenPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}