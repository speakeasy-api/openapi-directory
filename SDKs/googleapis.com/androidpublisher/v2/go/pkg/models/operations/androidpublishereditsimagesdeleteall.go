// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsImagesDeleteallSecurity struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

// AndroidpublisherEditsImagesDeleteallImageTypeEnum
type AndroidpublisherEditsImagesDeleteallImageTypeEnum string

const (
	AndroidpublisherEditsImagesDeleteallImageTypeEnumFeatureGraphic       AndroidpublisherEditsImagesDeleteallImageTypeEnum = "featureGraphic"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumIcon                 AndroidpublisherEditsImagesDeleteallImageTypeEnum = "icon"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumPhoneScreenshots     AndroidpublisherEditsImagesDeleteallImageTypeEnum = "phoneScreenshots"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumPromoGraphic         AndroidpublisherEditsImagesDeleteallImageTypeEnum = "promoGraphic"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumSevenInchScreenshots AndroidpublisherEditsImagesDeleteallImageTypeEnum = "sevenInchScreenshots"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumTenInchScreenshots   AndroidpublisherEditsImagesDeleteallImageTypeEnum = "tenInchScreenshots"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumTvBanner             AndroidpublisherEditsImagesDeleteallImageTypeEnum = "tvBanner"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumTvScreenshots        AndroidpublisherEditsImagesDeleteallImageTypeEnum = "tvScreenshots"
	AndroidpublisherEditsImagesDeleteallImageTypeEnumWearScreenshots      AndroidpublisherEditsImagesDeleteallImageTypeEnum = "wearScreenshots"
)

func (e AndroidpublisherEditsImagesDeleteallImageTypeEnum) ToPointer() *AndroidpublisherEditsImagesDeleteallImageTypeEnum {
	return &e
}

func (e *AndroidpublisherEditsImagesDeleteallImageTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "featureGraphic":
		fallthrough
	case "icon":
		fallthrough
	case "phoneScreenshots":
		fallthrough
	case "promoGraphic":
		fallthrough
	case "sevenInchScreenshots":
		fallthrough
	case "tenInchScreenshots":
		fallthrough
	case "tvBanner":
		fallthrough
	case "tvScreenshots":
		fallthrough
	case "wearScreenshots":
		*e = AndroidpublisherEditsImagesDeleteallImageTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AndroidpublisherEditsImagesDeleteallImageTypeEnum: %v", v)
	}
}

type AndroidpublisherEditsImagesDeleteallRequest struct {
	// Data format for the response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// Unique identifier for this edit.
	EditID string `pathParam:"style=simple,explode=false,name=editId"`
	// Selector specifying which fields to include in a partial response.
	Fields    *string                                           `queryParam:"style=form,explode=true,name=fields"`
	ImageType AndroidpublisherEditsImagesDeleteallImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
	Language string `pathParam:"style=simple,explode=false,name=language"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Deprecated. Please use quotaUser instead.
	UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsImagesDeleteallResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
