// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

// DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum - Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum string

const (
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeChannel                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeApp                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeURL                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeGender                       DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeViewability                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeCategory                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeExchange                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypePoi                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeOmid                         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

func (e DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum) ToPointer() *DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum {
	return &e
}

func (e *DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "TARGETING_TYPE_UNSPECIFIED":
		fallthrough
	case "TARGETING_TYPE_CHANNEL":
		fallthrough
	case "TARGETING_TYPE_APP_CATEGORY":
		fallthrough
	case "TARGETING_TYPE_APP":
		fallthrough
	case "TARGETING_TYPE_URL":
		fallthrough
	case "TARGETING_TYPE_DAY_AND_TIME":
		fallthrough
	case "TARGETING_TYPE_AGE_RANGE":
		fallthrough
	case "TARGETING_TYPE_REGIONAL_LOCATION_LIST":
		fallthrough
	case "TARGETING_TYPE_PROXIMITY_LOCATION_LIST":
		fallthrough
	case "TARGETING_TYPE_GENDER":
		fallthrough
	case "TARGETING_TYPE_VIDEO_PLAYER_SIZE":
		fallthrough
	case "TARGETING_TYPE_USER_REWARDED_CONTENT":
		fallthrough
	case "TARGETING_TYPE_PARENTAL_STATUS":
		fallthrough
	case "TARGETING_TYPE_CONTENT_INSTREAM_POSITION":
		fallthrough
	case "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION":
		fallthrough
	case "TARGETING_TYPE_DEVICE_TYPE":
		fallthrough
	case "TARGETING_TYPE_AUDIENCE_GROUP":
		fallthrough
	case "TARGETING_TYPE_BROWSER":
		fallthrough
	case "TARGETING_TYPE_HOUSEHOLD_INCOME":
		fallthrough
	case "TARGETING_TYPE_ON_SCREEN_POSITION":
		fallthrough
	case "TARGETING_TYPE_THIRD_PARTY_VERIFIER":
		fallthrough
	case "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION":
		fallthrough
	case "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION":
		fallthrough
	case "TARGETING_TYPE_ENVIRONMENT":
		fallthrough
	case "TARGETING_TYPE_CARRIER_AND_ISP":
		fallthrough
	case "TARGETING_TYPE_OPERATING_SYSTEM":
		fallthrough
	case "TARGETING_TYPE_DEVICE_MAKE_MODEL":
		fallthrough
	case "TARGETING_TYPE_KEYWORD":
		fallthrough
	case "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST":
		fallthrough
	case "TARGETING_TYPE_VIEWABILITY":
		fallthrough
	case "TARGETING_TYPE_CATEGORY":
		fallthrough
	case "TARGETING_TYPE_INVENTORY_SOURCE":
		fallthrough
	case "TARGETING_TYPE_LANGUAGE":
		fallthrough
	case "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS":
		fallthrough
	case "TARGETING_TYPE_GEO_REGION":
		fallthrough
	case "TARGETING_TYPE_INVENTORY_SOURCE_GROUP":
		fallthrough
	case "TARGETING_TYPE_EXCHANGE":
		fallthrough
	case "TARGETING_TYPE_SUB_EXCHANGE":
		fallthrough
	case "TARGETING_TYPE_POI":
		fallthrough
	case "TARGETING_TYPE_BUSINESS_CHAIN":
		fallthrough
	case "TARGETING_TYPE_CONTENT_DURATION":
		fallthrough
	case "TARGETING_TYPE_CONTENT_STREAM_TYPE":
		fallthrough
	case "TARGETING_TYPE_NATIVE_CONTENT_POSITION":
		fallthrough
	case "TARGETING_TYPE_OMID":
		fallthrough
	case "TARGETING_TYPE_AUDIO_CONTENT_TYPE":
		fallthrough
	case "TARGETING_TYPE_CONTENT_GENRE":
		*e = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum: %v", v)
	}
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest struct {
	// V1 error format.
	DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Required. The ID of the advertiser the insertion order belongs to.
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested.
	AssignedTargetingOptionID string `pathParam:"style=simple,explode=false,name=assignedTargetingOptionId"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// Required. The ID of the insertion order the assigned targeting option belongs to.
	InsertionOrderID string `pathParam:"style=simple,explode=false,name=insertionOrderId"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
	TargetingType DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse struct {
	// Successful response
	AssignedTargetingOption *shared.AssignedTargetingOption
	ContentType             string
	StatusCode              int
	RawResponse             *http.Response
}
