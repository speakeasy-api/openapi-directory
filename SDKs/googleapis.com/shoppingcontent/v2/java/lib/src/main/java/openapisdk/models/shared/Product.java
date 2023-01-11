package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Product
 *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
**/
public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImageLinks")
    public String[] additionalImageLinks;
    public Product withAdditionalImageLinks(String[] additionalImageLinks) {
        this.additionalImageLinks = additionalImageLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalProductTypes")
    public String[] additionalProductTypes;
    public Product withAdditionalProductTypes(String[] additionalProductTypes) {
        this.additionalProductTypes = additionalProductTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adult")
    public Boolean adult;
    public Product withAdult(Boolean adult) {
        this.adult = adult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adwordsGrouping")
    public String adwordsGrouping;
    public Product withAdwordsGrouping(String adwordsGrouping) {
        this.adwordsGrouping = adwordsGrouping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adwordsLabels")
    public String[] adwordsLabels;
    public Product withAdwordsLabels(String[] adwordsLabels) {
        this.adwordsLabels = adwordsLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adwordsRedirect")
    public String adwordsRedirect;
    public Product withAdwordsRedirect(String adwordsRedirect) {
        this.adwordsRedirect = adwordsRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageGroup")
    public String ageGroup;
    public Product withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspects")
    public ProductAspect[] aspects;
    public Product withAspects(ProductAspect[] aspects) {
        this.aspects = aspects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public String availability;
    public Product withAvailability(String availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityDate")
    public String availabilityDate;
    public Product withAvailabilityDate(String availabilityDate) {
        this.availabilityDate = availabilityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public Product withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalLink")
    public String canonicalLink;
    public Product withCanonicalLink(String canonicalLink) {
        this.canonicalLink = canonicalLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public Product withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public Product withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public Product withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;
    public Product withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costOfGoodsSold")
    public Price costOfGoodsSold;
    public Product withCostOfGoodsSold(Price costOfGoodsSold) {
        this.costOfGoodsSold = costOfGoodsSold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributes")
    public CustomAttribute[] customAttributes;
    public Product withCustomAttributes(CustomAttribute[] customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customGroups")
    public CustomGroup[] customGroups;
    public Product withCustomGroups(CustomGroup[] customGroups) {
        this.customGroups = customGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLabel0")
    public String customLabel0;
    public Product withCustomLabel0(String customLabel0) {
        this.customLabel0 = customLabel0;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLabel1")
    public String customLabel1;
    public Product withCustomLabel1(String customLabel1) {
        this.customLabel1 = customLabel1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLabel2")
    public String customLabel2;
    public Product withCustomLabel2(String customLabel2) {
        this.customLabel2 = customLabel2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLabel3")
    public String customLabel3;
    public Product withCustomLabel3(String customLabel3) {
        this.customLabel3 = customLabel3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLabel4")
    public String customLabel4;
    public Product withCustomLabel4(String customLabel4) {
        this.customLabel4 = customLabel4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Product withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public ProductDestination[] destinations;
    public Product withDestinations(ProductDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayAdsId")
    public String displayAdsId;
    public Product withDisplayAdsId(String displayAdsId) {
        this.displayAdsId = displayAdsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayAdsLink")
    public String displayAdsLink;
    public Product withDisplayAdsLink(String displayAdsLink) {
        this.displayAdsLink = displayAdsLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayAdsSimilarIds")
    public String[] displayAdsSimilarIds;
    public Product withDisplayAdsSimilarIds(String[] displayAdsSimilarIds) {
        this.displayAdsSimilarIds = displayAdsSimilarIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayAdsTitle")
    public String displayAdsTitle;
    public Product withDisplayAdsTitle(String displayAdsTitle) {
        this.displayAdsTitle = displayAdsTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayAdsValue")
    public Double displayAdsValue;
    public Product withDisplayAdsValue(Double displayAdsValue) {
        this.displayAdsValue = displayAdsValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficiencyClass")
    public String energyEfficiencyClass;
    public Product withEnergyEfficiencyClass(String energyEfficiencyClass) {
        this.energyEfficiencyClass = energyEfficiencyClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public Product withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public Product withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleProductCategory")
    public String googleProductCategory;
    public Product withGoogleProductCategory(String googleProductCategory) {
        this.googleProductCategory = googleProductCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String gtin;
    public Product withGtin(String gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Product withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifierExists")
    public Boolean identifierExists;
    public Product withIdentifierExists(Boolean identifierExists) {
        this.identifierExists = identifierExists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLink")
    public String imageLink;
    public Product withImageLink(String imageLink) {
        this.imageLink = imageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installment")
    public Installment installment;
    public Product withInstallment(Installment installment) {
        this.installment = installment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBundle")
    public Boolean isBundle;
    public Product withIsBundle(Boolean isBundle) {
        this.isBundle = isBundle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public Product withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Product withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Product withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loyaltyPoints")
    public LoyaltyPoints loyaltyPoints;
    public Product withLoyaltyPoints(LoyaltyPoints loyaltyPoints) {
        this.loyaltyPoints = loyaltyPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("material")
    public String material;
    public Product withMaterial(String material) {
        this.material = material;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEnergyEfficiencyClass")
    public String maxEnergyEfficiencyClass;
    public Product withMaxEnergyEfficiencyClass(String maxEnergyEfficiencyClass) {
        this.maxEnergyEfficiencyClass = maxEnergyEfficiencyClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxHandlingTime")
    public String maxHandlingTime;
    public Product withMaxHandlingTime(String maxHandlingTime) {
        this.maxHandlingTime = maxHandlingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minEnergyEfficiencyClass")
    public String minEnergyEfficiencyClass;
    public Product withMinEnergyEfficiencyClass(String minEnergyEfficiencyClass) {
        this.minEnergyEfficiencyClass = minEnergyEfficiencyClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minHandlingTime")
    public String minHandlingTime;
    public Product withMinHandlingTime(String minHandlingTime) {
        this.minHandlingTime = minHandlingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileLink")
    public String mobileLink;
    public Product withMobileLink(String mobileLink) {
        this.mobileLink = mobileLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String mpn;
    public Product withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multipack")
    public String multipack;
    public Product withMultipack(String multipack) {
        this.multipack = multipack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public Product withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onlineOnly")
    public Boolean onlineOnly;
    public Product withOnlineOnly(Boolean onlineOnly) {
        this.onlineOnly = onlineOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pattern")
    public String pattern;
    public Product withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;
    public Product withPrice(Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productType")
    public String productType;
    public Product withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionIds")
    public String[] promotionIds;
    public Product withPromotionIds(String[] promotionIds) {
        this.promotionIds = promotionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salePrice")
    public Price salePrice;
    public Product withSalePrice(Price salePrice) {
        this.salePrice = salePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salePriceEffectiveDate")
    public String salePriceEffectiveDate;
    public Product withSalePriceEffectiveDate(String salePriceEffectiveDate) {
        this.salePriceEffectiveDate = salePriceEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellOnGoogleQuantity")
    public String sellOnGoogleQuantity;
    public Product withSellOnGoogleQuantity(String sellOnGoogleQuantity) {
        this.sellOnGoogleQuantity = sellOnGoogleQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping")
    public ProductShipping[] shipping;
    public Product withShipping(ProductShipping[] shipping) {
        this.shipping = shipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingHeight")
    public ProductShippingDimension shippingHeight;
    public Product withShippingHeight(ProductShippingDimension shippingHeight) {
        this.shippingHeight = shippingHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingLabel")
    public String shippingLabel;
    public Product withShippingLabel(String shippingLabel) {
        this.shippingLabel = shippingLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingLength")
    public ProductShippingDimension shippingLength;
    public Product withShippingLength(ProductShippingDimension shippingLength) {
        this.shippingLength = shippingLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingWeight")
    public ProductShippingWeight shippingWeight;
    public Product withShippingWeight(ProductShippingWeight shippingWeight) {
        this.shippingWeight = shippingWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingWidth")
    public ProductShippingDimension shippingWidth;
    public Product withShippingWidth(ProductShippingDimension shippingWidth) {
        this.shippingWidth = shippingWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeSystem")
    public String sizeSystem;
    public Product withSizeSystem(String sizeSystem) {
        this.sizeSystem = sizeSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeType")
    public String sizeType;
    public Product withSizeType(String sizeType) {
        this.sizeType = sizeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizes")
    public String[] sizes;
    public Product withSizes(String[] sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Product withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCountry")
    public String targetCountry;
    public Product withTargetCountry(String targetCountry) {
        this.targetCountry = targetCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public ProductTax[] taxes;
    public Product withTaxes(ProductTax[] taxes) {
        this.taxes = taxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Product withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPricingBaseMeasure")
    public ProductUnitPricingBaseMeasure unitPricingBaseMeasure;
    public Product withUnitPricingBaseMeasure(ProductUnitPricingBaseMeasure unitPricingBaseMeasure) {
        this.unitPricingBaseMeasure = unitPricingBaseMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPricingMeasure")
    public ProductUnitPricingMeasure unitPricingMeasure;
    public Product withUnitPricingMeasure(ProductUnitPricingMeasure unitPricingMeasure) {
        this.unitPricingMeasure = unitPricingMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validatedDestinations")
    public String[] validatedDestinations;
    public Product withValidatedDestinations(String[] validatedDestinations) {
        this.validatedDestinations = validatedDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public Product withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}