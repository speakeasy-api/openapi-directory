package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListTransferableOffersRequest
 * Request message for CloudChannelService.ListTransferableOffers
**/
public class GoogleCloudChannelV1ListTransferableOffersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityId")
    public String cloudIdentityId;
    public GoogleCloudChannelV1ListTransferableOffersRequest withCloudIdentityId(String cloudIdentityId) {
        this.cloudIdentityId = cloudIdentityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerName")
    public String customerName;
    public GoogleCloudChannelV1ListTransferableOffersRequest withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1ListTransferableOffersRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudChannelV1ListTransferableOffersRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudChannelV1ListTransferableOffersRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GoogleCloudChannelV1ListTransferableOffersRequest withSku(String sku) {
        this.sku = sku;
        return this;
    }
}