package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainCertV4UpdateDomainCertV4Request {
    @SpeakeasyMetadata("form:name=TlsCert")
    public String tlsCert;
    public UpdateDomainCertV4UpdateDomainCertV4Request withTlsCert(String tlsCert) {
        this.tlsCert = tlsCert;
        return this;
    }
}