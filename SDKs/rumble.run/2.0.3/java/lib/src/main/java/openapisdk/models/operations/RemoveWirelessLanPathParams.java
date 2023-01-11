package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveWirelessLanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=wireless_id")
    public String wirelessId;
    public RemoveWirelessLanPathParams withWirelessId(String wirelessId) {
        this.wirelessId = wirelessId;
        return this;
    }
}