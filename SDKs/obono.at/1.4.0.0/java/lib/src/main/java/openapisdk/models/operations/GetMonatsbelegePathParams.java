package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMonatsbelegePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetMonatsbelegePathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}