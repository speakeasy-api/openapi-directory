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
    @JsonProperty("categories")
    public CategoriesInput categories;
    public LocationInput withCategories(CategoriesInput categories) {
        this.categories = categories;
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
    public OpenInfoInput openInfo;
    public LocationInput withOpenInfo(OpenInfoInput openInfo) {
        this.openInfo = openInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumbers")
    public PhoneNumbers phoneNumbers;
    public LocationInput withPhoneNumbers(PhoneNumbers phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
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
    @JsonProperty("serviceItems")
    public ServiceItem[] serviceItems;
    public LocationInput withServiceItems(ServiceItem[] serviceItems) {
        this.serviceItems = serviceItems;
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
    @JsonProperty("storefrontAddress")
    public PostalAddress storefrontAddress;
    public LocationInput withStorefrontAddress(PostalAddress storefrontAddress) {
        this.storefrontAddress = storefrontAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public LocationInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUri")
    public String websiteUri;
    public LocationInput withWebsiteUri(String websiteUri) {
        this.websiteUri = websiteUri;
        return this;
    }
}