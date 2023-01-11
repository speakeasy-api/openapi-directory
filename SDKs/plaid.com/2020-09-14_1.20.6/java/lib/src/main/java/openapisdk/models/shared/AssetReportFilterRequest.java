package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportFilterRequest
 * AssetReportFilterRequest defines the request schema for `/asset_report/filter`
**/
public class AssetReportFilterRequest {
    @JsonProperty("account_ids_to_exclude")
    public String[] accountIdsToExclude;
    public AssetReportFilterRequest withAccountIdsToExclude(String[] accountIdsToExclude) {
        this.accountIdsToExclude = accountIdsToExclude;
        return this;
    }
    @JsonProperty("asset_report_token")
    public String assetReportToken;
    public AssetReportFilterRequest withAssetReportToken(String assetReportToken) {
        this.assetReportToken = assetReportToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportFilterRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportFilterRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}