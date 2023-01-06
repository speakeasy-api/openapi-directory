package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateProjectRequestBody struct {
	CallbackURL     *string  `multipartForm:"name=callback_url"`
	CouponCode      *string  `multipartForm:"name=coupon_code"`
	Custom          []string `multipartForm:"name=custom,json"`
	SourceLanguage  *string  `multipartForm:"name=source_language"`
	TargetLanguages []string `multipartForm:"name=target_languages[],json"`
}

type UpdateProjectRequest struct {
	PathParams UpdateProjectPathParams
	Request    *UpdateProjectRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateProjectResponse struct {
	ContentType string
	Error       *shared.Error
	Project     *shared.Project
	StatusCode  int64
}
