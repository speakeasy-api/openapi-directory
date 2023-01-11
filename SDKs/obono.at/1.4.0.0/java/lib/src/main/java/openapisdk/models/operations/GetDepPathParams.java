package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDepPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetDepPathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}