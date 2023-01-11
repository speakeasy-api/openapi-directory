package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAddressCreateSipIpAddressRequest {
    @SpeakeasyMetadata("form:name=CidrPrefixLength")
    public Long cidrPrefixLength;
    public CreateSipIpAddressCreateSipIpAddressRequest withCidrPrefixLength(Long cidrPrefixLength) {
        this.cidrPrefixLength = cidrPrefixLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateSipIpAddressCreateSipIpAddressRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpAddress")
    public String ipAddress;
    public CreateSipIpAddressCreateSipIpAddressRequest withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
}