package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSourceIpMappingUpdateSourceIpMappingRequest {
    @SpeakeasyMetadata("form:name=SipDomainSid")
    public String sipDomainSid;
    public UpdateSourceIpMappingUpdateSourceIpMappingRequest withSipDomainSid(String sipDomainSid) {
        this.sipDomainSid = sipDomainSid;
        return this;
    }
}