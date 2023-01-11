package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportGobdRegistrierkassenRegistrierkasseUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetExportGobdRegistrierkassenRegistrierkasseUuidPathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}