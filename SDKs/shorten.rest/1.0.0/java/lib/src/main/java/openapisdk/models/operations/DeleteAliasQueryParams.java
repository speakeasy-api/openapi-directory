package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliasName")
    public String aliasName;
    public DeleteAliasQueryParams withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domainName")
    public String domainName;
    public DeleteAliasQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}