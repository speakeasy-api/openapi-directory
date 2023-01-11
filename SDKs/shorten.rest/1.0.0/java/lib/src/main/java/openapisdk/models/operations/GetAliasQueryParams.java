package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliasName")
    public String aliasName;
    public GetAliasQueryParams withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domainName")
    public String domainName;
    public GetAliasQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}