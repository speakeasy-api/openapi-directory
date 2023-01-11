package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auditClientIp")
    public String auditClientIp;
    public GetStatusQueryParams withAuditClientIp(String auditClientIp) {
        this.auditClientIp = auditClientIp;
        return this;
    }
}