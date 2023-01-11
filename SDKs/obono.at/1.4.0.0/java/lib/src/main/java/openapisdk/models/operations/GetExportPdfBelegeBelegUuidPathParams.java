package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportPdfBelegeBelegUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public GetExportPdfBelegeBelegUuidPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
}