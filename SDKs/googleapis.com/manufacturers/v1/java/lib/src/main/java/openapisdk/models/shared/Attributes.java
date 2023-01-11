package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attributes
 * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
**/
public class Attributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImageLink")
    public Image[] additionalImageLink;
    public Attributes withAdditionalImageLink(Image[] additionalImageLink) {
        this.additionalImageLink = additionalImageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageGroup")
    public String ageGroup;
    public Attributes withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public Attributes withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacity")
    public Capacity capacity;
    public Attributes withCapacity(Capacity capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public Attributes withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Count count;
    public Attributes withCount(Count count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Attributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disclosureDate")
    public String disclosureDate;
    public Attributes withDisclosureDate(String disclosureDate) {
        this.disclosureDate = disclosureDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedDestination")
    public String[] excludedDestination;
    public Attributes withExcludedDestination(String[] excludedDestination) {
        this.excludedDestination = excludedDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureDescription")
    public FeatureDescription[] featureDescription;
    public Attributes withFeatureDescription(FeatureDescription[] featureDescription) {
        this.featureDescription = featureDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flavor")
    public String flavor;
    public Attributes withFlavor(String flavor) {
        this.flavor = flavor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public Attributes withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public Attributes withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grocery")
    public Grocery grocery;
    public Attributes withGrocery(Grocery grocery) {
        this.grocery = grocery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String[] gtin;
    public Attributes withGtin(String[] gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLink")
    public Image imageLink;
    public Attributes withImageLink(Image imageLink) {
        this.imageLink = imageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedDestination")
    public String[] includedDestination;
    public Attributes withIncludedDestination(String[] includedDestination) {
        this.includedDestination = includedDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public Attributes withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("material")
    public String material;
    public Attributes withMaterial(String material) {
        this.material = material;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String mpn;
    public Attributes withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nutrition")
    public Nutrition nutrition;
    public Attributes withNutrition(Nutrition nutrition) {
        this.nutrition = nutrition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pattern")
    public String pattern;
    public Attributes withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productDetail")
    public ProductDetail[] productDetail;
    public Attributes withProductDetail(ProductDetail[] productDetail) {
        this.productDetail = productDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productHighlight")
    public String[] productHighlight;
    public Attributes withProductHighlight(String[] productHighlight) {
        this.productHighlight = productHighlight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productLine")
    public String productLine;
    public Attributes withProductLine(String productLine) {
        this.productLine = productLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public Attributes withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPageUrl")
    public String productPageUrl;
    public Attributes withProductPageUrl(String productPageUrl) {
        this.productPageUrl = productPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productType")
    public String[] productType;
    public Attributes withProductType(String[] productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public String releaseDate;
    public Attributes withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("richProductContent")
    public String[] richProductContent;
    public Attributes withRichProductContent(String[] richProductContent) {
        this.richProductContent = richProductContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scent")
    public String scent;
    public Attributes withScent(String scent) {
        this.scent = scent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public Attributes withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeSystem")
    public String sizeSystem;
    public Attributes withSizeSystem(String sizeSystem) {
        this.sizeSystem = sizeSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeType")
    public String[] sizeType;
    public Attributes withSizeType(String[] sizeType) {
        this.sizeType = sizeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestedRetailPrice")
    public Price suggestedRetailPrice;
    public Attributes withSuggestedRetailPrice(Price suggestedRetailPrice) {
        this.suggestedRetailPrice = suggestedRetailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetClientId")
    public String targetClientId;
    public Attributes withTargetClientId(String targetClientId) {
        this.targetClientId = targetClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public String theme;
    public Attributes withTheme(String theme) {
        this.theme = theme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Attributes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoLink")
    public String[] videoLink;
    public Attributes withVideoLink(String[] videoLink) {
        this.videoLink = videoLink;
        return this;
    }
}