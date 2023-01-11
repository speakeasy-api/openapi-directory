package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportAuditCopyRemoveRequest
 * AssetReportAuditCopyRemoveRequest defines the request schema for `/asset_report/audit_copy/remove`
**/
public class AssetReportAuditCopyRemoveRequest {
    @JsonProperty("audit_copy_token")
    public String auditCopyToken;
    public AssetReportAuditCopyRemoveRequest withAuditCopyToken(String auditCopyToken) {
        this.auditCopyToken = auditCopyToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportAuditCopyRemoveRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportAuditCopyRemoveRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}