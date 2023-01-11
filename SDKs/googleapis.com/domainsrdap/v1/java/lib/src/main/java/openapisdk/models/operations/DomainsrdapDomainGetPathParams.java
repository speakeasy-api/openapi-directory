package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsrdapDomainGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public DomainsrdapDomainGetPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}