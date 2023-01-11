package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectDeal
 * The configuration data for an Ad Exchange direct deal.
**/
public class DirectDeal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Integer accountId;
    public DirectDeal withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiser")
    public String advertiser;
    public DirectDeal withAdvertiser(String advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsAlcohol")
    public Boolean allowsAlcohol;
    public DirectDeal withAllowsAlcohol(Boolean allowsAlcohol) {
        this.allowsAlcohol = allowsAlcohol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerAccountId")
    public String buyerAccountId;
    public DirectDeal withBuyerAccountId(String buyerAccountId) {
        this.buyerAccountId = buyerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public DirectDeal withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealTier")
    public String dealTier;
    public DirectDeal withDealTier(String dealTier) {
        this.dealTier = dealTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public DirectDeal withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedCpm")
    public String fixedCpm;
    public DirectDeal withFixedCpm(String fixedCpm) {
        this.fixedCpm = fixedCpm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DirectDeal withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DirectDeal withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DirectDeal withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateExchangeMinCpm")
    public String privateExchangeMinCpm;
    public DirectDeal withPrivateExchangeMinCpm(String privateExchangeMinCpm) {
        this.privateExchangeMinCpm = privateExchangeMinCpm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherBlocksOverriden")
    public Boolean publisherBlocksOverriden;
    public DirectDeal withPublisherBlocksOverriden(Boolean publisherBlocksOverriden) {
        this.publisherBlocksOverriden = publisherBlocksOverriden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerNetwork")
    public String sellerNetwork;
    public DirectDeal withSellerNetwork(String sellerNetwork) {
        this.sellerNetwork = sellerNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public DirectDeal withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}