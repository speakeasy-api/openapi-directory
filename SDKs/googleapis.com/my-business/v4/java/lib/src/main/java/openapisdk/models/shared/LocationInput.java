package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationInput
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
public class LocationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adWordsLocationExtensions")
    public AdWordsLocationExtensions adWordsLocationExtensions;
    public LocationInput withAdWordsLocationExtensions(AdWordsLocationExtensions adWordsLocationExtensions) {
        this.adWordsLocationExtensions = adWordsLocationExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCategories")
    public CategoryInput[] additionalCategories;
    public LocationInput withAdditionalCategories(CategoryInput[] additionalCategories) {
        this.additionalCategories = additionalCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalPhones")
    public String[] additionalPhones;
    public LocationInput withAdditionalPhones(String[] additionalPhones) {
        this.additionalPhones = additionalPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress address;
    public LocationInput withAddress(PostalAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public LocationInput withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public LocationInput withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public LocationInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latlng")
    public LatLng latlng;
    public LocationInput withLatlng(LatLng latlng) {
        this.latlng = latlng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationKey")
    public LocationKey locationKey;
    public LocationInput withLocationKey(LocationKey locationKey) {
        this.locationKey = locationKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public LocationInput withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationState")
    public LocationStateInput locationState;
    public LocationInput withLocationState(LocationStateInput locationState) {
        this.locationState = locationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Metadata metadata;
    public LocationInput withMetadata(Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreHours")
    public MoreHours[] moreHours;
    public LocationInput withMoreHours(MoreHours[] moreHours) {
        this.moreHours = moreHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openInfo")
    public OpenInfo openInfo;
    public LocationInput withOpenInfo(OpenInfo openInfo) {
        this.openInfo = openInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceLists")
    public PriceList[] priceLists;
    public LocationInput withPriceLists(PriceList[] priceLists) {
        this.priceLists = priceLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryCategory")
    public CategoryInput primaryCategory;
    public LocationInput withPrimaryCategory(CategoryInput primaryCategory) {
        this.primaryCategory = primaryCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public String primaryPhone;
    public LocationInput withPrimaryPhone(String primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public Profile profile;
    public LocationInput withProfile(Profile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularHours")
    public BusinessHours regularHours;
    public LocationInput withRegularHours(BusinessHours regularHours) {
        this.regularHours = regularHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipData")
    public RelationshipData relationshipData;
    public LocationInput withRelationshipData(RelationshipData relationshipData) {
        this.relationshipData = relationshipData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceArea")
    public ServiceAreaBusiness serviceArea;
    public LocationInput withServiceArea(ServiceAreaBusiness serviceArea) {
        this.serviceArea = serviceArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialHours")
    public SpecialHours specialHours;
    public LocationInput withSpecialHours(SpecialHours specialHours) {
        this.specialHours = specialHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCode")
    public String storeCode;
    public LocationInput withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public LocationInput withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}