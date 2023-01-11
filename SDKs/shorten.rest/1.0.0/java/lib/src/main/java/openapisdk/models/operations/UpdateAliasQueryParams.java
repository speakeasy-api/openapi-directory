package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliasName")
    public String aliasName;
    public UpdateAliasQueryParams withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domainName")
    public String domainName;
    public UpdateAliasQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}