package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipIpAddressUpdateSipIpAddressRequest {
    @SpeakeasyMetadata("form:name=CidrPrefixLength")
    public Long cidrPrefixLength;
    public UpdateSipIpAddressUpdateSipIpAddressRequest withCidrPrefixLength(Long cidrPrefixLength) {
        this.cidrPrefixLength = cidrPrefixLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateSipIpAddressUpdateSipIpAddressRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpAddress")
    public String ipAddress;
    public UpdateSipIpAddressUpdateSipIpAddressRequest withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
}