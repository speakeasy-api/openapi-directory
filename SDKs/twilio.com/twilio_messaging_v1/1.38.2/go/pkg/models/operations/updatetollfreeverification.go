package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTollfreeVerificationServerList = []string{
	"https://messaging.twilio.com",
}

type UpdateTollfreeVerificationPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateTollfreeVerificationUpdateTollfreeVerificationRequest struct {
	AdditionalInformation       *string                                       `form:"name=AdditionalInformation"`
	BusinessCity                *string                                       `form:"name=BusinessCity"`
	BusinessContactEmail        *string                                       `form:"name=BusinessContactEmail"`
	BusinessContactFirstName    *string                                       `form:"name=BusinessContactFirstName"`
	BusinessContactLastName     *string                                       `form:"name=BusinessContactLastName"`
	BusinessContactPhone        *string                                       `form:"name=BusinessContactPhone"`
	BusinessCountry             *string                                       `form:"name=BusinessCountry"`
	BusinessName                *string                                       `form:"name=BusinessName"`
	BusinessPostalCode          *string                                       `form:"name=BusinessPostalCode"`
	BusinessStateProvinceRegion *string                                       `form:"name=BusinessStateProvinceRegion"`
	BusinessStreetAddress       *string                                       `form:"name=BusinessStreetAddress"`
	BusinessStreetAddress2      *string                                       `form:"name=BusinessStreetAddress2"`
	BusinessWebsite             *string                                       `form:"name=BusinessWebsite"`
	MessageVolume               *string                                       `form:"name=MessageVolume"`
	NotificationEmail           *string                                       `form:"name=NotificationEmail"`
	OptInImageUrls              []string                                      `form:"name=OptInImageUrls"`
	OptInType                   *shared.TollfreeVerificationEnumOptInTypeEnum `form:"name=OptInType"`
	ProductionMessageSample     *string                                       `form:"name=ProductionMessageSample"`
	UseCaseCategories           []string                                      `form:"name=UseCaseCategories"`
	UseCaseSummary              *string                                       `form:"name=UseCaseSummary"`
}

type UpdateTollfreeVerificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTollfreeVerificationRequest struct {
	ServerURL  *string
	PathParams UpdateTollfreeVerificationPathParams
	Request    *UpdateTollfreeVerificationUpdateTollfreeVerificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTollfreeVerificationSecurity
}

type UpdateTollfreeVerificationResponse struct {
	ContentType                     string
	StatusCode                      int64
	MessagingV1TollfreeVerification *shared.MessagingV1TollfreeVerification
}
