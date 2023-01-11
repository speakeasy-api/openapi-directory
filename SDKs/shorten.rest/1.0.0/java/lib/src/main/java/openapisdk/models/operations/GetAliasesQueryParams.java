package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAliasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=continueFrom")
    public String continueFrom;
    public GetAliasesQueryParams withContinueFrom(String continueFrom) {
        this.continueFrom = continueFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domainName")
    public String domainName;
    public GetAliasesQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetAliasesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}