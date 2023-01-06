package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchImagesImageTypeEnum string

const (
	SearchImagesImageTypeEnumPhoto        SearchImagesImageTypeEnum = "photo"
	SearchImagesImageTypeEnumIllustration SearchImagesImageTypeEnum = "illustration"
	SearchImagesImageTypeEnumVector       SearchImagesImageTypeEnum = "vector"
)

type SearchImagesLicenseEnum string

const (
	SearchImagesLicenseEnumCommercial SearchImagesLicenseEnum = "commercial"
	SearchImagesLicenseEnumEditorial  SearchImagesLicenseEnum = "editorial"
	SearchImagesLicenseEnumEnhanced   SearchImagesLicenseEnum = "enhanced"
)

type SearchImagesOrientationEnum string

const (
	SearchImagesOrientationEnumHorizontal SearchImagesOrientationEnum = "horizontal"
	SearchImagesOrientationEnumVertical   SearchImagesOrientationEnum = "vertical"
)

type SearchImagesPeopleAgeEnum string

const (
	SearchImagesPeopleAgeEnumInfants   SearchImagesPeopleAgeEnum = "infants"
	SearchImagesPeopleAgeEnumChildren  SearchImagesPeopleAgeEnum = "children"
	SearchImagesPeopleAgeEnumTeenagers SearchImagesPeopleAgeEnum = "teenagers"
	SearchImagesPeopleAgeEnumTwentys   SearchImagesPeopleAgeEnum = "20s"
	SearchImagesPeopleAgeEnumThirtys   SearchImagesPeopleAgeEnum = "30s"
	SearchImagesPeopleAgeEnumFortys    SearchImagesPeopleAgeEnum = "40s"
	SearchImagesPeopleAgeEnumFiftys    SearchImagesPeopleAgeEnum = "50s"
	SearchImagesPeopleAgeEnumSixtys    SearchImagesPeopleAgeEnum = "60s"
	SearchImagesPeopleAgeEnumOlder     SearchImagesPeopleAgeEnum = "older"
)

type SearchImagesPeopleEthnicityEnum string

const (
	SearchImagesPeopleEthnicityEnumAfrican         SearchImagesPeopleEthnicityEnum = "african"
	SearchImagesPeopleEthnicityEnumAfricanAmerican SearchImagesPeopleEthnicityEnum = "african_american"
	SearchImagesPeopleEthnicityEnumBlack           SearchImagesPeopleEthnicityEnum = "black"
	SearchImagesPeopleEthnicityEnumBrazilian       SearchImagesPeopleEthnicityEnum = "brazilian"
	SearchImagesPeopleEthnicityEnumChinese         SearchImagesPeopleEthnicityEnum = "chinese"
	SearchImagesPeopleEthnicityEnumCaucasian       SearchImagesPeopleEthnicityEnum = "caucasian"
	SearchImagesPeopleEthnicityEnumEastAsian       SearchImagesPeopleEthnicityEnum = "east_asian"
	SearchImagesPeopleEthnicityEnumHispanic        SearchImagesPeopleEthnicityEnum = "hispanic"
	SearchImagesPeopleEthnicityEnumJapanese        SearchImagesPeopleEthnicityEnum = "japanese"
	SearchImagesPeopleEthnicityEnumMiddleEastern   SearchImagesPeopleEthnicityEnum = "middle_eastern"
	SearchImagesPeopleEthnicityEnumNativeAmerican  SearchImagesPeopleEthnicityEnum = "native_american"
	SearchImagesPeopleEthnicityEnumPacificIslander SearchImagesPeopleEthnicityEnum = "pacific_islander"
	SearchImagesPeopleEthnicityEnumSouthAsian      SearchImagesPeopleEthnicityEnum = "south_asian"
	SearchImagesPeopleEthnicityEnumSoutheastAsian  SearchImagesPeopleEthnicityEnum = "southeast_asian"
	SearchImagesPeopleEthnicityEnumOther           SearchImagesPeopleEthnicityEnum = "other"
)

type SearchImagesPeopleGenderEnum string

const (
	SearchImagesPeopleGenderEnumMale   SearchImagesPeopleGenderEnum = "male"
	SearchImagesPeopleGenderEnumFemale SearchImagesPeopleGenderEnum = "female"
	SearchImagesPeopleGenderEnumBoth   SearchImagesPeopleGenderEnum = "both"
)

type SearchImagesSortEnum string

const (
	SearchImagesSortEnumNewest    SearchImagesSortEnum = "newest"
	SearchImagesSortEnumPopular   SearchImagesSortEnum = "popular"
	SearchImagesSortEnumRelevance SearchImagesSortEnum = "relevance"
	SearchImagesSortEnumRandom    SearchImagesSortEnum = "random"
)

type SearchImagesViewEnum string

const (
	SearchImagesViewEnumMinimal SearchImagesViewEnum = "minimal"
	SearchImagesViewEnumFull    SearchImagesViewEnum = "full"
)

type SearchImagesQueryParams struct {
	AddedDate           *time.Time                        `queryParam:"style=form,explode=true,name=added_date"`
	AddedDateEnd        *time.Time                        `queryParam:"style=form,explode=true,name=added_date_end"`
	AddedDateStart      *time.Time                        `queryParam:"style=form,explode=true,name=added_date_start"`
	AspectRatio         *float64                          `queryParam:"style=form,explode=true,name=aspect_ratio"`
	AspectRatioMax      *float64                          `queryParam:"style=form,explode=true,name=aspect_ratio_max"`
	AspectRatioMin      *float64                          `queryParam:"style=form,explode=true,name=aspect_ratio_min"`
	Category            *string                           `queryParam:"style=form,explode=true,name=category"`
	Color               *string                           `queryParam:"style=form,explode=true,name=color"`
	Contributor         []string                          `queryParam:"style=form,explode=true,name=contributor"`
	ContributorCountry  *interface{}                      `queryParam:"style=form,explode=true,name=contributor_country"`
	Fields              *string                           `queryParam:"style=form,explode=true,name=fields"`
	Height              *int64                            `queryParam:"style=form,explode=true,name=height"`
	HeightFrom          *int64                            `queryParam:"style=form,explode=true,name=height_from"`
	HeightTo            *int64                            `queryParam:"style=form,explode=true,name=height_to"`
	ImageType           []SearchImagesImageTypeEnum       `queryParam:"style=form,explode=true,name=image_type"`
	KeywordSafeSearch   *bool                             `queryParam:"style=form,explode=true,name=keyword_safe_search"`
	Language            *shared.LanguageEnum              `queryParam:"style=form,explode=true,name=language"`
	License             []SearchImagesLicenseEnum         `queryParam:"style=form,explode=true,name=license"`
	Model               []string                          `queryParam:"style=form,explode=true,name=model"`
	Orientation         *SearchImagesOrientationEnum      `queryParam:"style=form,explode=true,name=orientation"`
	Page                *int64                            `queryParam:"style=form,explode=true,name=page"`
	PeopleAge           *SearchImagesPeopleAgeEnum        `queryParam:"style=form,explode=true,name=people_age"`
	PeopleEthnicity     []SearchImagesPeopleEthnicityEnum `queryParam:"style=form,explode=true,name=people_ethnicity"`
	PeopleGender        *SearchImagesPeopleGenderEnum     `queryParam:"style=form,explode=true,name=people_gender"`
	PeopleModelReleased *bool                             `queryParam:"style=form,explode=true,name=people_model_released"`
	PeopleNumber        *int64                            `queryParam:"style=form,explode=true,name=people_number"`
	PerPage             *int64                            `queryParam:"style=form,explode=true,name=per_page"`
	Query               *string                           `queryParam:"style=form,explode=true,name=query"`
	Region              *interface{}                      `queryParam:"style=form,explode=true,name=region"`
	Safe                *bool                             `queryParam:"style=form,explode=true,name=safe"`
	Sort                *SearchImagesSortEnum             `queryParam:"style=form,explode=true,name=sort"`
	SpellcheckQuery     *bool                             `queryParam:"style=form,explode=true,name=spellcheck_query"`
	View                *SearchImagesViewEnum             `queryParam:"style=form,explode=true,name=view"`
	Width               *int64                            `queryParam:"style=form,explode=true,name=width"`
	WidthFrom           *int64                            `queryParam:"style=form,explode=true,name=width_from"`
	WidthTo             *int64                            `queryParam:"style=form,explode=true,name=width_to"`
}

type SearchImagesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type SearchImagesRequest struct {
	QueryParams SearchImagesQueryParams
	Security    SearchImagesSecurity
}

type SearchImagesResponse struct {
	ContentType        string
	ImageSearchResults *shared.ImageSearchResults
	StatusCode         int64
}
