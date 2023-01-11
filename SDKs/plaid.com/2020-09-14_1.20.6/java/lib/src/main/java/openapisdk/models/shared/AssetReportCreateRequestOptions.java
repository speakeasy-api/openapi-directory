package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportCreateRequestOptions
 * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
**/
public class AssetReportCreateRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_report_id")
    public String clientReportId;
    public AssetReportCreateRequestOptions withClientReportId(String clientReportId) {
        this.clientReportId = clientReportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public java.util.Map<String, Object> user;
    public AssetReportCreateRequestOptions withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public String webhook;
    public AssetReportCreateRequestOptions withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}