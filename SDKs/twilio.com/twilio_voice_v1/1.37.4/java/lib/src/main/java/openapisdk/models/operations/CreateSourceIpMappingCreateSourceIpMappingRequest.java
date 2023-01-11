package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSourceIpMappingCreateSourceIpMappingRequest {
    @SpeakeasyMetadata("form:name=IpRecordSid")
    public String ipRecordSid;
    public CreateSourceIpMappingCreateSourceIpMappingRequest withIpRecordSid(String ipRecordSid) {
        this.ipRecordSid = ipRecordSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipDomainSid")
    public String sipDomainSid;
    public CreateSourceIpMappingCreateSourceIpMappingRequest withSipDomainSid(String sipDomainSid) {
        this.sipDomainSid = sipDomainSid;
        return this;
    }
}