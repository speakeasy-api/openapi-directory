package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchVideosAspectRatioEnum string

const (
	SearchVideosAspectRatioEnumFour3       SearchVideosAspectRatioEnum = "4_3"
	SearchVideosAspectRatioEnumSixteen9    SearchVideosAspectRatioEnum = "16_9"
	SearchVideosAspectRatioEnumNonstandard SearchVideosAspectRatioEnum = "nonstandard"
)

type SearchVideosLicenseEnum string

const (
	SearchVideosLicenseEnumCommercial SearchVideosLicenseEnum = "commercial"
	SearchVideosLicenseEnumEditorial  SearchVideosLicenseEnum = "editorial"
)

type SearchVideosPeopleAgeEnum string

const (
	SearchVideosPeopleAgeEnumInfants   SearchVideosPeopleAgeEnum = "infants"
	SearchVideosPeopleAgeEnumChildren  SearchVideosPeopleAgeEnum = "children"
	SearchVideosPeopleAgeEnumTeenagers SearchVideosPeopleAgeEnum = "teenagers"
	SearchVideosPeopleAgeEnumTwentys   SearchVideosPeopleAgeEnum = "20s"
	SearchVideosPeopleAgeEnumThirtys   SearchVideosPeopleAgeEnum = "30s"
	SearchVideosPeopleAgeEnumFortys    SearchVideosPeopleAgeEnum = "40s"
	SearchVideosPeopleAgeEnumFiftys    SearchVideosPeopleAgeEnum = "50s"
	SearchVideosPeopleAgeEnumSixtys    SearchVideosPeopleAgeEnum = "60s"
	SearchVideosPeopleAgeEnumOlder     SearchVideosPeopleAgeEnum = "older"
)

type SearchVideosPeopleEthnicityEnum string

const (
	SearchVideosPeopleEthnicityEnumAfrican         SearchVideosPeopleEthnicityEnum = "african"
	SearchVideosPeopleEthnicityEnumAfricanAmerican SearchVideosPeopleEthnicityEnum = "african_american"
	SearchVideosPeopleEthnicityEnumBlack           SearchVideosPeopleEthnicityEnum = "black"
	SearchVideosPeopleEthnicityEnumBrazilian       SearchVideosPeopleEthnicityEnum = "brazilian"
	SearchVideosPeopleEthnicityEnumChinese         SearchVideosPeopleEthnicityEnum = "chinese"
	SearchVideosPeopleEthnicityEnumCaucasian       SearchVideosPeopleEthnicityEnum = "caucasian"
	SearchVideosPeopleEthnicityEnumEastAsian       SearchVideosPeopleEthnicityEnum = "east_asian"
	SearchVideosPeopleEthnicityEnumHispanic        SearchVideosPeopleEthnicityEnum = "hispanic"
	SearchVideosPeopleEthnicityEnumJapanese        SearchVideosPeopleEthnicityEnum = "japanese"
	SearchVideosPeopleEthnicityEnumMiddleEastern   SearchVideosPeopleEthnicityEnum = "middle_eastern"
	SearchVideosPeopleEthnicityEnumNativeAmerican  SearchVideosPeopleEthnicityEnum = "native_american"
	SearchVideosPeopleEthnicityEnumPacificIslander SearchVideosPeopleEthnicityEnum = "pacific_islander"
	SearchVideosPeopleEthnicityEnumSouthAsian      SearchVideosPeopleEthnicityEnum = "south_asian"
	SearchVideosPeopleEthnicityEnumSoutheastAsian  SearchVideosPeopleEthnicityEnum = "southeast_asian"
	SearchVideosPeopleEthnicityEnumOther           SearchVideosPeopleEthnicityEnum = "other"
)

type SearchVideosPeopleGenderEnum string

const (
	SearchVideosPeopleGenderEnumMale   SearchVideosPeopleGenderEnum = "male"
	SearchVideosPeopleGenderEnumFemale SearchVideosPeopleGenderEnum = "female"
	SearchVideosPeopleGenderEnumBoth   SearchVideosPeopleGenderEnum = "both"
)

type SearchVideosResolutionEnum string

const (
	SearchVideosResolutionEnumFourk              SearchVideosResolutionEnum = "4k"
	SearchVideosResolutionEnumStandardDefinition SearchVideosResolutionEnum = "standard_definition"
	SearchVideosResolutionEnumHighDefinition     SearchVideosResolutionEnum = "high_definition"
)

type SearchVideosSortEnum string

const (
	SearchVideosSortEnumNewest    SearchVideosSortEnum = "newest"
	SearchVideosSortEnumPopular   SearchVideosSortEnum = "popular"
	SearchVideosSortEnumRelevance SearchVideosSortEnum = "relevance"
	SearchVideosSortEnumRandom    SearchVideosSortEnum = "random"
)

type SearchVideosViewEnum string

const (
	SearchVideosViewEnumMinimal SearchVideosViewEnum = "minimal"
	SearchVideosViewEnumFull    SearchVideosViewEnum = "full"
)

type SearchVideosQueryParams struct {
	AddedDate           *time.Time                        `queryParam:"style=form,explode=true,name=added_date"`
	AddedDateEnd        *time.Time                        `queryParam:"style=form,explode=true,name=added_date_end"`
	AddedDateStart      *time.Time                        `queryParam:"style=form,explode=true,name=added_date_start"`
	AspectRatio         *SearchVideosAspectRatioEnum      `queryParam:"style=form,explode=true,name=aspect_ratio"`
	Category            *string                           `queryParam:"style=form,explode=true,name=category"`
	Contributor         []string                          `queryParam:"style=form,explode=true,name=contributor"`
	ContributorCountry  []string                          `queryParam:"style=form,explode=true,name=contributor_country"`
	Duration            *int64                            `queryParam:"style=form,explode=true,name=duration"`
	DurationFrom        *int64                            `queryParam:"style=form,explode=true,name=duration_from"`
	DurationTo          *int64                            `queryParam:"style=form,explode=true,name=duration_to"`
	Fps                 *float64                          `queryParam:"style=form,explode=true,name=fps"`
	FpsFrom             *float64                          `queryParam:"style=form,explode=true,name=fps_from"`
	FpsTo               *float64                          `queryParam:"style=form,explode=true,name=fps_to"`
	KeywordSafeSearch   *bool                             `queryParam:"style=form,explode=true,name=keyword_safe_search"`
	Language            *shared.LanguageEnum              `queryParam:"style=form,explode=true,name=language"`
	License             []SearchVideosLicenseEnum         `queryParam:"style=form,explode=true,name=license"`
	Model               []string                          `queryParam:"style=form,explode=true,name=model"`
	Page                *int64                            `queryParam:"style=form,explode=true,name=page"`
	PeopleAge           *SearchVideosPeopleAgeEnum        `queryParam:"style=form,explode=true,name=people_age"`
	PeopleEthnicity     []SearchVideosPeopleEthnicityEnum `queryParam:"style=form,explode=true,name=people_ethnicity"`
	PeopleGender        *SearchVideosPeopleGenderEnum     `queryParam:"style=form,explode=true,name=people_gender"`
	PeopleModelReleased *bool                             `queryParam:"style=form,explode=true,name=people_model_released"`
	PeopleNumber        *int64                            `queryParam:"style=form,explode=true,name=people_number"`
	PerPage             *int64                            `queryParam:"style=form,explode=true,name=per_page"`
	Query               *string                           `queryParam:"style=form,explode=true,name=query"`
	Resolution          *SearchVideosResolutionEnum       `queryParam:"style=form,explode=true,name=resolution"`
	Safe                *bool                             `queryParam:"style=form,explode=true,name=safe"`
	Sort                *SearchVideosSortEnum             `queryParam:"style=form,explode=true,name=sort"`
	View                *SearchVideosViewEnum             `queryParam:"style=form,explode=true,name=view"`
}

type SearchVideosSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type SearchVideosRequest struct {
	QueryParams SearchVideosQueryParams
	Security    SearchVideosSecurity
}

type SearchVideosResponse struct {
	ContentType        string
	StatusCode         int64
	VideoSearchResults *shared.VideoSearchResults
}
