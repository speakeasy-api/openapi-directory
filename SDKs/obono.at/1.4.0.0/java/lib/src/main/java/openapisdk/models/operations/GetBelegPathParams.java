package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBelegPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public GetBelegPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public GetBelegPathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}