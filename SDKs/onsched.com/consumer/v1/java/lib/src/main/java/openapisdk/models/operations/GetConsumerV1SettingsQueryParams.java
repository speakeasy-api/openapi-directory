package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1SettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1SettingsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}