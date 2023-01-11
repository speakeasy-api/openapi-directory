package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConnectedDeviceListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=peer_device")
    public String peerDevice;
    public DcimConnectedDeviceListQueryParams withPeerDevice(String peerDevice) {
        this.peerDevice = peerDevice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=peer_interface")
    public String peerInterface;
    public DcimConnectedDeviceListQueryParams withPeerInterface(String peerInterface) {
        this.peerInterface = peerInterface;
        return this;
    }
}