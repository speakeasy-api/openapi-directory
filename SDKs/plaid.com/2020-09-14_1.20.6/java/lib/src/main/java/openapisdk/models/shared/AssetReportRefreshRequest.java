package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportRefreshRequest
 * AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
**/
public class AssetReportRefreshRequest {
    @JsonProperty("asset_report_token")
    public String assetReportToken;
    public AssetReportRefreshRequest withAssetReportToken(String assetReportToken) {
        this.assetReportToken = assetReportToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportRefreshRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("days_requested")
    public Long daysRequested;
    public AssetReportRefreshRequest withDaysRequested(Long daysRequested) {
        this.daysRequested = daysRequested;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public AssetReportRefreshRequestOptions options;
    public AssetReportRefreshRequest withOptions(AssetReportRefreshRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportRefreshRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}