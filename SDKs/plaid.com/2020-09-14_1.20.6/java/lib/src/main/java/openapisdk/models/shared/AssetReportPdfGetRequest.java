package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportPdfGetRequest
 * AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
**/
public class AssetReportPdfGetRequest {
    @JsonProperty("asset_report_token")
    public String assetReportToken;
    public AssetReportPdfGetRequest withAssetReportToken(String assetReportToken) {
        this.assetReportToken = assetReportToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportPdfGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportPdfGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}