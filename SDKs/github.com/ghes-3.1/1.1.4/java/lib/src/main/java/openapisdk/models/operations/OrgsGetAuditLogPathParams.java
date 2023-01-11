package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsGetAuditLogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsGetAuditLogPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}