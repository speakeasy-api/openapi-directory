package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseTrackLicenseEnum string

const (
	LicenseTrackLicenseEnumAudioPlatform        LicenseTrackLicenseEnum = "audio_platform"
	LicenseTrackLicenseEnumPremierMusicBasic    LicenseTrackLicenseEnum = "premier_music_basic"
	LicenseTrackLicenseEnumPremierMusicExtended LicenseTrackLicenseEnum = "premier_music_extended"
	LicenseTrackLicenseEnumPremierMusicPro      LicenseTrackLicenseEnum = "premier_music_pro"
	LicenseTrackLicenseEnumPremierMusicComp     LicenseTrackLicenseEnum = "premier_music_comp"
)

type LicenseTrackQueryParams struct {
	License  *LicenseTrackLicenseEnum `queryParam:"style=form,explode=true,name=license"`
	SearchID *string                  `queryParam:"style=form,explode=true,name=search_id"`
}

type LicenseTrackSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type LicenseTrackRequest struct {
	QueryParams LicenseTrackQueryParams
	Request     shared.LicenseAudioRequest `request:"mediaType=application/json"`
	Security    LicenseTrackSecurity
}

type LicenseTrackResponse struct {
	ContentType                string
	LicenseAudioResultDataList *interface{}
	StatusCode                 int64
}
