package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelToStoreLinkDetails
 * Information specific to a store on a merchandising platform linked to a YouTube channel.
**/
public class ChannelToStoreLinkDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public ChannelToStoreLinkDetails withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeName")
    public String storeName;
    public ChannelToStoreLinkDetails withStoreName(String storeName) {
        this.storeName = storeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeUrl")
    public String storeUrl;
    public ChannelToStoreLinkDetails withStoreUrl(String storeUrl) {
        this.storeUrl = storeUrl;
        return this;
    }
}