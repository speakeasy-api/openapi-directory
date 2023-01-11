package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportQrBelegeBelegUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public GetExportQrBelegeBelegUuidPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
}