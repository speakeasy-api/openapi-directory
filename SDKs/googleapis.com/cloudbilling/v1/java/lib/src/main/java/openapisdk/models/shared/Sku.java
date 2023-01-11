package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sku
 * Encapsulates a single SKU in Google Cloud Platform
**/
public class Sku {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public Category category;
    public Sku withCategory(Category category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Sku withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTaxonomy")
    public GeoTaxonomy geoTaxonomy;
    public Sku withGeoTaxonomy(GeoTaxonomy geoTaxonomy) {
        this.geoTaxonomy = geoTaxonomy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Sku withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingInfo")
    public PricingInfo[] pricingInfo;
    public Sku withPricingInfo(PricingInfo[] pricingInfo) {
        this.pricingInfo = pricingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceProviderName")
    public String serviceProviderName;
    public Sku withServiceProviderName(String serviceProviderName) {
        this.serviceProviderName = serviceProviderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRegions")
    public String[] serviceRegions;
    public Sku withServiceRegions(String[] serviceRegions) {
        this.serviceRegions = serviceRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuId")
    public String skuId;
    public Sku withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
}