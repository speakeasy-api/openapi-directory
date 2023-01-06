package shared

type GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum string

const (
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumIndustryCategoryUnspecified  GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "INDUSTRY_CATEGORY_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumAutomotive                   GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "AUTOMOTIVE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumBusinessAndIndustrialMarkets GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "BUSINESS_AND_INDUSTRIAL_MARKETS"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumFinance                      GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "FINANCE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumHealthcare                   GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "HEALTHCARE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumTechnology                   GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "TECHNOLOGY"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumTravel                       GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "TRAVEL"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumOther                        GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "OTHER"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumArtsAndEntertainment         GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "ARTS_AND_ENTERTAINMENT"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumBeautyAndFitness             GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "BEAUTY_AND_FITNESS"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumBooksAndLiterature           GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "BOOKS_AND_LITERATURE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumFoodAndDrink                 GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "FOOD_AND_DRINK"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumGames                        GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "GAMES"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumHobbiesAndLeisure            GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "HOBBIES_AND_LEISURE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumHomeAndGarden                GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "HOME_AND_GARDEN"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumInternetAndTelecom           GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "INTERNET_AND_TELECOM"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumLawAndGovernment             GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "LAW_AND_GOVERNMENT"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumNews                         GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "NEWS"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumOnlineCommunities            GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "ONLINE_COMMUNITIES"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumPeopleAndSociety             GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "PEOPLE_AND_SOCIETY"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumPetsAndAnimals               GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "PETS_AND_ANIMALS"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumRealEstate                   GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "REAL_ESTATE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumReference                    GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "REFERENCE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumScience                      GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "SCIENCE"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumSports                       GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "SPORTS"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumJobsAndEducation             GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "JOBS_AND_EDUCATION"
	GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumShopping                     GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum = "SHOPPING"
)

type GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum string

const (
	GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnumPropertyTypeUnspecified GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum = "PROPERTY_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnumPropertyTypeOrdinary    GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum = "PROPERTY_TYPE_ORDINARY"
	GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnumPropertyTypeSubproperty GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum = "PROPERTY_TYPE_SUBPROPERTY"
	GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnumPropertyTypeRollup      GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum = "PROPERTY_TYPE_ROLLUP"
)

type GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum string

const (
	GoogleAnalyticsAdminV1betaPropertyServiceLevelEnumServiceLevelUnspecified GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum = "SERVICE_LEVEL_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaPropertyServiceLevelEnumGoogleAnalyticsStandard GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum = "GOOGLE_ANALYTICS_STANDARD"
	GoogleAnalyticsAdminV1betaPropertyServiceLevelEnumGoogleAnalytics360      GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum = "GOOGLE_ANALYTICS_360"
)

// GoogleAnalyticsAdminV1betaProperty
// A resource message representing a Google Analytics GA4 property.
type GoogleAnalyticsAdminV1betaProperty struct {
	Account          *string                                                 `json:"account,omitempty"`
	CreateTime       *string                                                 `json:"createTime,omitempty"`
	CurrencyCode     *string                                                 `json:"currencyCode,omitempty"`
	DeleteTime       *string                                                 `json:"deleteTime,omitempty"`
	DisplayName      *string                                                 `json:"displayName,omitempty"`
	ExpireTime       *string                                                 `json:"expireTime,omitempty"`
	IndustryCategory *GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum `json:"industryCategory,omitempty"`
	Name             *string                                                 `json:"name,omitempty"`
	Parent           *string                                                 `json:"parent,omitempty"`
	PropertyType     *GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum     `json:"propertyType,omitempty"`
	ServiceLevel     *GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum     `json:"serviceLevel,omitempty"`
	TimeZone         *string                                                 `json:"timeZone,omitempty"`
	UpdateTime       *string                                                 `json:"updateTime,omitempty"`
}

// GoogleAnalyticsAdminV1betaPropertyInput
// A resource message representing a Google Analytics GA4 property.
type GoogleAnalyticsAdminV1betaPropertyInput struct {
	Account          *string                                                 `json:"account,omitempty"`
	CurrencyCode     *string                                                 `json:"currencyCode,omitempty"`
	DisplayName      *string                                                 `json:"displayName,omitempty"`
	IndustryCategory *GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum `json:"industryCategory,omitempty"`
	Parent           *string                                                 `json:"parent,omitempty"`
	PropertyType     *GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum     `json:"propertyType,omitempty"`
	TimeZone         *string                                                 `json:"timeZone,omitempty"`
}
