package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}