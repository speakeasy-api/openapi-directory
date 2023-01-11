package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Conversion
 * A conversion containing data relevant to DoubleClick Search.
**/
public class Conversion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adGroupId")
    public String adGroupId;
    public Conversion withAdGroupId(String adGroupId) {
        this.adGroupId = adGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adId")
    public String adId;
    public Conversion withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Conversion withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agencyId")
    public String agencyId;
    public Conversion withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionModel")
    public String attributionModel;
    public Conversion withAttributionModel(String attributionModel) {
        this.attributionModel = attributionModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public Conversion withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public Conversion withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickId")
    public String clickId;
    public Conversion withClickId(String clickId) {
        this.clickId = clickId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionId")
    public String conversionId;
    public Conversion withConversionId(String conversionId) {
        this.conversionId = conversionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionModifiedTimestamp")
    public String conversionModifiedTimestamp;
    public Conversion withConversionModifiedTimestamp(String conversionModifiedTimestamp) {
        this.conversionModifiedTimestamp = conversionModifiedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionTimestamp")
    public String conversionTimestamp;
    public Conversion withConversionTimestamp(String conversionTimestamp) {
        this.conversionTimestamp = conversionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countMillis")
    public String countMillis;
    public Conversion withCountMillis(String countMillis) {
        this.countMillis = countMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criterionId")
    public String criterionId;
    public Conversion withCriterionId(String criterionId) {
        this.criterionId = criterionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Conversion withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDimension")
    public CustomDimension[] customDimension;
    public Conversion withCustomDimension(CustomDimension[] customDimension) {
        this.customDimension = customDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customMetric")
    public CustomMetric[] customMetric;
    public Conversion withCustomMetric(CustomMetric[] customMetric) {
        this.customMetric = customMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public Conversion withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public String deviceType;
    public Conversion withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsConversionId")
    public String dsConversionId;
    public Conversion withDsConversionId(String dsConversionId) {
        this.dsConversionId = dsConversionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineAccountId")
    public String engineAccountId;
    public Conversion withEngineAccountId(String engineAccountId) {
        this.engineAccountId = engineAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightOrderId")
    public String floodlightOrderId;
    public Conversion withFloodlightOrderId(String floodlightOrderId) {
        this.floodlightOrderId = floodlightOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryAccountId")
    public String inventoryAccountId;
    public Conversion withInventoryAccountId(String inventoryAccountId) {
        this.inventoryAccountId = inventoryAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCountry")
    public String productCountry;
    public Conversion withProductCountry(String productCountry) {
        this.productCountry = productCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productGroupId")
    public String productGroupId;
    public Conversion withProductGroupId(String productGroupId) {
        this.productGroupId = productGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public Conversion withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productLanguage")
    public String productLanguage;
    public Conversion withProductLanguage(String productLanguage) {
        this.productLanguage = productLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityMillis")
    public String quantityMillis;
    public Conversion withQuantityMillis(String quantityMillis) {
        this.quantityMillis = quantityMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueMicros")
    public String revenueMicros;
    public Conversion withRevenueMicros(String revenueMicros) {
        this.revenueMicros = revenueMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationId")
    public String segmentationId;
    public Conversion withSegmentationId(String segmentationId) {
        this.segmentationId = segmentationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationName")
    public String segmentationName;
    public Conversion withSegmentationName(String segmentationName) {
        this.segmentationName = segmentationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationType")
    public String segmentationType;
    public Conversion withSegmentationType(String segmentationType) {
        this.segmentationType = segmentationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Conversion withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeId")
    public String storeId;
    public Conversion withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Conversion withType(String type) {
        this.type = type;
        return this;
    }
}