package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBelegeBelegUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public GetBelegeBelegUuidPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
}