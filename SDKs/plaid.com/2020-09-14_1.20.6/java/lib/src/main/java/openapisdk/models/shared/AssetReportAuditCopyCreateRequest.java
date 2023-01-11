package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportAuditCopyCreateRequest
 * AssetReportAuditCopyCreateRequest defines the request schema for `/asset_report/audit_copy/get`
**/
public class AssetReportAuditCopyCreateRequest {
    @JsonProperty("asset_report_token")
    public String assetReportToken;
    public AssetReportAuditCopyCreateRequest withAssetReportToken(String assetReportToken) {
        this.assetReportToken = assetReportToken;
        return this;
    }
    @JsonProperty("auditor_id")
    public String auditorId;
    public AssetReportAuditCopyCreateRequest withAuditorId(String auditorId) {
        this.auditorId = auditorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportAuditCopyCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportAuditCopyCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}