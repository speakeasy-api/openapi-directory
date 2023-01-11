package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiSmOwnersForKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bluetoothMac")
    public String bluetoothMac;
    public GetNetworkPiiSmOwnersForKeyQueryParams withBluetoothMac(String bluetoothMac) {
        this.bluetoothMac = bluetoothMac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetNetworkPiiSmOwnersForKeyQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imei")
    public String imei;
    public GetNetworkPiiSmOwnersForKeyQueryParams withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mac")
    public String mac;
    public GetNetworkPiiSmOwnersForKeyQueryParams withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serial")
    public String serial;
    public GetNetworkPiiSmOwnersForKeyQueryParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetNetworkPiiSmOwnersForKeyQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}