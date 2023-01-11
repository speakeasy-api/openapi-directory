package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportRemoveRequest
 * AssetReportRemoveRequest defines the request schema for `/asset_report/remove`
**/
public class AssetReportRemoveRequest {
    @JsonProperty("asset_report_token")
    public String assetReportToken;
    public AssetReportRemoveRequest withAssetReportToken(String assetReportToken) {
        this.assetReportToken = assetReportToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportRemoveRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportRemoveRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}