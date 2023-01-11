package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportThermalPrintBelegeBelegUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public GetExportThermalPrintBelegeBelegUuidPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
}