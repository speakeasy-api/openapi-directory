package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportHtmlBelegeBelegUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public GetExportHtmlBelegeBelegUuidPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
}