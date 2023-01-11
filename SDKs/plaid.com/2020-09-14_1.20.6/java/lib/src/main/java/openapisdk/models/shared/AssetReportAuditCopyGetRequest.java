package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportAuditCopyGetRequest
 * AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get`
**/
public class AssetReportAuditCopyGetRequest {
    @JsonProperty("audit_copy_token")
    public String auditCopyToken;
    public AssetReportAuditCopyGetRequest withAuditCopyToken(String auditCopyToken) {
        this.auditCopyToken = auditCopyToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportAuditCopyGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportAuditCopyGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}