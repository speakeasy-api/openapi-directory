package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamIpAddressesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamIpAddressesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}