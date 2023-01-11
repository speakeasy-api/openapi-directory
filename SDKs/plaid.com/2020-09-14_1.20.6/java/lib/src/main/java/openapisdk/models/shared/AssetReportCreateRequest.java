package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetReportCreateRequest
 * AssetReportCreateRequest defines the request schema for `/asset_report/create`
**/
public class AssetReportCreateRequest {
    @JsonProperty("access_tokens")
    public String[] accessTokens;
    public AssetReportCreateRequest withAccessTokens(String[] accessTokens) {
        this.accessTokens = accessTokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AssetReportCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("days_requested")
    public Long daysRequested;
    public AssetReportCreateRequest withDaysRequested(Long daysRequested) {
        this.daysRequested = daysRequested;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public AssetReportCreateRequestOptions options;
    public AssetReportCreateRequest withOptions(AssetReportCreateRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AssetReportCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}