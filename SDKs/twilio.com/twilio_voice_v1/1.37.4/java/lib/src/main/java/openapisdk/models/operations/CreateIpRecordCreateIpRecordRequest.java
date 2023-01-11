package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpRecordCreateIpRecordRequest {
    @SpeakeasyMetadata("form:name=CidrPrefixLength")
    public Long cidrPrefixLength;
    public CreateIpRecordCreateIpRecordRequest withCidrPrefixLength(Long cidrPrefixLength) {
        this.cidrPrefixLength = cidrPrefixLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateIpRecordCreateIpRecordRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpAddress")
    public String ipAddress;
    public CreateIpRecordCreateIpRecordRequest withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
}