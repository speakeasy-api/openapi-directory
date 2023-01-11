import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum {
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

export enum GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum {
    PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED",
    PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY",
    PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY",
    PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP"
}

export enum GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum {
    ServiceLevelUnspecified = "SERVICE_LEVEL_UNSPECIFIED",
    GoogleAnalyticsStandard = "GOOGLE_ANALYTICS_STANDARD",
    GoogleAnalytics360 = "GOOGLE_ANALYTICS_360"
}


// GoogleAnalyticsAdminV1betaProperty
/** 
 * A resource message representing a Google Analytics GA4 property.
**/
export class GoogleAnalyticsAdminV1betaProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=industryCategory" })
  industryCategory?: GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyType" })
  propertyType?: GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceLevel" })
  serviceLevel?: GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleAnalyticsAdminV1betaPropertyInput
/** 
 * A resource message representing a Google Analytics GA4 property.
**/
export class GoogleAnalyticsAdminV1betaPropertyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=industryCategory" })
  industryCategory?: GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyType" })
  propertyType?: GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
