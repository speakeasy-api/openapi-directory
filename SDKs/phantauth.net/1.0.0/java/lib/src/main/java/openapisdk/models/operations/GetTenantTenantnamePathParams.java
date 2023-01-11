package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTenantTenantnamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantname")
    public String tenantname;
    public GetTenantTenantnamePathParams withTenantname(String tenantname) {
        this.tenantname = tenantname;
        return this;
    }
}