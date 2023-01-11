package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2ClassificationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiscoveryV2ClassificationsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}