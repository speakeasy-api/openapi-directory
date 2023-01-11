package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportRefreshRequestOptions
 * An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
**/
public class AssetReportRefreshRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_report_id")
    public String clientReportId;
    public AssetReportRefreshRequestOptions withClientReportId(String clientReportId) {
        this.clientReportId = clientReportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public java.util.Map<String, Object> user;
    public AssetReportRefreshRequestOptions withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public String webhook;
    public AssetReportRefreshRequestOptions withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}