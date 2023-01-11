package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}