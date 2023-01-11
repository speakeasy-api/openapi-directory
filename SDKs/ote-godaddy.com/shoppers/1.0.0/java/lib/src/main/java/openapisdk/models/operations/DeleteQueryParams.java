package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auditClientIp")
    public String auditClientIp;
    public DeleteQueryParams withAuditClientIp(String auditClientIp) {
        this.auditClientIp = auditClientIp;
        return this;
    }
}