package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportGetRequest
 * AssetReportGetRequest defines the request schema for `/asset_report/get`
**/
public class AssetReportGetRequest {
    @JsonProperty("asset_report_token")
    public String assetReportToken;
    public AssetReportGetRequest withAssetReportToken(String assetReportToken) {
        this.assetReportToken = assetReportToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_insights")
    public Boolean includeInsights;
    public AssetReportGetRequest withIncludeInsights(Boolean includeInsights) {
        this.includeInsights = includeInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}