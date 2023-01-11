package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainDomainnamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainname")
    public String domainname;
    public GetDomainDomainnamePathParams withDomainname(String domainname) {
        this.domainname = domainname;
        return this;
    }
}