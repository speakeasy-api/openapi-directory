package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiPiiKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bluetoothMac")
    public String bluetoothMac;
    public GetNetworkPiiPiiKeysQueryParams withBluetoothMac(String bluetoothMac) {
        this.bluetoothMac = bluetoothMac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetNetworkPiiPiiKeysQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imei")
    public String imei;
    public GetNetworkPiiPiiKeysQueryParams withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mac")
    public String mac;
    public GetNetworkPiiPiiKeysQueryParams withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serial")
    public String serial;
    public GetNetworkPiiPiiKeysQueryParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetNetworkPiiPiiKeysQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}