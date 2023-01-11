package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adWordsLocationExtensions")
    public AdWordsLocationExtensions adWordsLocationExtensions;
    public Location withAdWordsLocationExtensions(AdWordsLocationExtensions adWordsLocationExtensions) {
        this.adWordsLocationExtensions = adWordsLocationExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCategories")
    public Category[] additionalCategories;
    public Location withAdditionalCategories(Category[] additionalCategories) {
        this.additionalCategories = additionalCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalPhones")
    public String[] additionalPhones;
    public Location withAdditionalPhones(String[] additionalPhones) {
        this.additionalPhones = additionalPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress address;
    public Location withAddress(PostalAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public Location withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public Location withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public Location withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latlng")
    public LatLng latlng;
    public Location withLatlng(LatLng latlng) {
        this.latlng = latlng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationKey")
    public LocationKey locationKey;
    public Location withLocationKey(LocationKey locationKey) {
        this.locationKey = locationKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public Location withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationState")
    public LocationState locationState;
    public Location withLocationState(LocationState locationState) {
        this.locationState = locationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Metadata metadata;
    public Location withMetadata(Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreHours")
    public MoreHours[] moreHours;
    public Location withMoreHours(MoreHours[] moreHours) {
        this.moreHours = moreHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Location withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openInfo")
    public OpenInfo openInfo;
    public Location withOpenInfo(OpenInfo openInfo) {
        this.openInfo = openInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceLists")
    public PriceList[] priceLists;
    public Location withPriceLists(PriceList[] priceLists) {
        this.priceLists = priceLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryCategory")
    public Category primaryCategory;
    public Location withPrimaryCategory(Category primaryCategory) {
        this.primaryCategory = primaryCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public String primaryPhone;
    public Location withPrimaryPhone(String primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public Profile profile;
    public Location withProfile(Profile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularHours")
    public BusinessHours regularHours;
    public Location withRegularHours(BusinessHours regularHours) {
        this.regularHours = regularHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipData")
    public RelationshipData relationshipData;
    public Location withRelationshipData(RelationshipData relationshipData) {
        this.relationshipData = relationshipData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceArea")
    public ServiceAreaBusiness serviceArea;
    public Location withServiceArea(ServiceAreaBusiness serviceArea) {
        this.serviceArea = serviceArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialHours")
    public SpecialHours specialHours;
    public Location withSpecialHours(SpecialHours specialHours) {
        this.specialHours = specialHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCode")
    public String storeCode;
    public Location withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public Location withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}