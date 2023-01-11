package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBelegPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=belegUuid")
    public String belegUuid;
    public AddBelegPathParams withBelegUuid(String belegUuid) {
        this.belegUuid = belegUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrierkasseUuid")
    public String registrierkasseUuid;
    public AddBelegPathParams withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}