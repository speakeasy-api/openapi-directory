import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
 */
export declare enum GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum {
    IndustryCategoryUnspecified = "INDUSTRY_CATEGORY_UNSPECIFIED",
    Automotive = "AUTOMOTIVE",
    BusinessAndIndustrialMarkets = "BUSINESS_AND_INDUSTRIAL_MARKETS",
    Finance = "FINANCE",
    Healthcare = "HEALTHCARE",
    Technology = "TECHNOLOGY",
    Travel = "TRAVEL",
    Other = "OTHER",
    ArtsAndEntertainment = "ARTS_AND_ENTERTAINMENT",
    BeautyAndFitness = "BEAUTY_AND_FITNESS",
    BooksAndLiterature = "BOOKS_AND_LITERATURE",
    FoodAndDrink = "FOOD_AND_DRINK",
    Games = "GAMES",
    HobbiesAndLeisure = "HOBBIES_AND_LEISURE",
    HomeAndGarden = "HOME_AND_GARDEN",
    InternetAndTelecom = "INTERNET_AND_TELECOM",
    LawAndGovernment = "LAW_AND_GOVERNMENT",
    News = "NEWS",
    OnlineCommunities = "ONLINE_COMMUNITIES",
    PeopleAndSociety = "PEOPLE_AND_SOCIETY",
    PetsAndAnimals = "PETS_AND_ANIMALS",
    RealEstate = "REAL_ESTATE",
    Reference = "REFERENCE",
    Science = "SCIENCE",
    Sports = "SPORTS",
    JobsAndEducation = "JOBS_AND_EDUCATION",
    Shopping = "SHOPPING"
}
/**
 * Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.
 */
export declare enum GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum {
    PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED",
    PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY",
    PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY",
    PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP"
}
/**
 * Output only. The Google Analytics service level that applies to this property.
 */
export declare enum GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum {
    ServiceLevelUnspecified = "SERVICE_LEVEL_UNSPECIFIED",
    GoogleAnalyticsStandard = "GOOGLE_ANALYTICS_STANDARD",
    GoogleAnalytics360 = "GOOGLE_ANALYTICS_360"
}
/**
 * A resource message representing a Google Analytics GA4 property.
 */
export declare class GoogleAnalyticsAdminV1alphaProperty extends SpeakeasyBase {
    /**
     * Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123"
     */
    account?: string;
    /**
     * Output only. Time when the entity was originally created.
     */
    createTime?: string;
    /**
     * The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
     */
    currencyCode?: string;
    /**
     * Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.
     */
    deleteTime?: string;
    /**
     * Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
     */
    displayName?: string;
    /**
     * Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.
     */
    expireTime?: string;
    /**
     * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
     */
    industryCategory?: GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
    /**
     * Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     */
    name?: string;
    /**
     * Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101"
     */
    parent?: string;
    /**
     * Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.
     */
    propertyType?: GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
    /**
     * Output only. The Google Analytics service level that applies to this property.
     */
    serviceLevel?: GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum;
    /**
     * Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
     */
    timeZone?: string;
    /**
     * Output only. Time when entity payload fields were last updated.
     */
    updateTime?: string;
}
/**
 * A resource message representing a Google Analytics GA4 property.
 */
export declare class GoogleAnalyticsAdminV1alphaPropertyInput extends SpeakeasyBase {
    /**
     * Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123"
     */
    account?: string;
    /**
     * The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
     */
    currencyCode?: string;
    /**
     * Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
     */
    displayName?: string;
    /**
     * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
     */
    industryCategory?: GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
    /**
     * Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101"
     */
    parent?: string;
    /**
     * Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.
     */
    propertyType?: GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
    /**
     * Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
     */
    timeZone?: string;
}
