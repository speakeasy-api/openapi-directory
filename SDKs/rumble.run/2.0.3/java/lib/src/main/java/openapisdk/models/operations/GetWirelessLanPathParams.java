package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWirelessLanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=wireless_id")
    public String wirelessId;
    public GetWirelessLanPathParams withWirelessId(String wirelessId) {
        this.wirelessId = wirelessId;
        return this;
    }
}