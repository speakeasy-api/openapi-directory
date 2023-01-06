package operations

type CertificateSitesealGetPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type CertificateSitesealGetThemeEnum string

const (
	CertificateSitesealGetThemeEnumDark  CertificateSitesealGetThemeEnum = "DARK"
	CertificateSitesealGetThemeEnumLight CertificateSitesealGetThemeEnum = "LIGHT"
)

type CertificateSitesealGetQueryParams struct {
	Locale *string                          `queryParam:"style=form,explode=true,name=locale"`
	Theme  *CertificateSitesealGetThemeEnum `queryParam:"style=form,explode=true,name=theme"`
}

type CertificateSitesealGetRequest struct {
	PathParams  CertificateSitesealGetPathParams
	QueryParams CertificateSitesealGetQueryParams
}

type CertificateSitesealGetResponse struct {
	CertificateSiteSeal *interface{}
	ContentType         string
	Error               *interface{}
	StatusCode          int64
}
