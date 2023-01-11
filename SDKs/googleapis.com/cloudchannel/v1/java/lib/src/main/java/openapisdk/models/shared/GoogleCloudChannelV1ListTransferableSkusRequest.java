package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListTransferableSkusRequest
 * Request message for CloudChannelService.ListTransferableSkus
**/
public class GoogleCloudChannelV1ListTransferableSkusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authToken")
    public String authToken;
    public GoogleCloudChannelV1ListTransferableSkusRequest withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityId")
    public String cloudIdentityId;
    public GoogleCloudChannelV1ListTransferableSkusRequest withCloudIdentityId(String cloudIdentityId) {
        this.cloudIdentityId = cloudIdentityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerName")
    public String customerName;
    public GoogleCloudChannelV1ListTransferableSkusRequest withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1ListTransferableSkusRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudChannelV1ListTransferableSkusRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudChannelV1ListTransferableSkusRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}