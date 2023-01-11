package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}