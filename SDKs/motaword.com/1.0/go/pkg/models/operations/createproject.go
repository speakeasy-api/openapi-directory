package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectRequestBodyDocuments struct {
	Content   []byte `multipartForm:"content"`
	Documents string `multipartForm:"name=documents[]"`
}

type CreateProjectRequestBodyGlossaries struct {
	Content    []byte `multipartForm:"content"`
	Glossaries string `multipartForm:"name=glossaries[]"`
}

type CreateProjectRequestBodyStyleguides struct {
	Content     []byte `multipartForm:"content"`
	Styleguides string `multipartForm:"name=styleguides[]"`
}

type CreateProjectRequestBody struct {
	CallbackURL     *string                              `multipartForm:"name=callback_url"`
	CouponCode      *string                              `multipartForm:"name=coupon_code"`
	Custom          []string                             `multipartForm:"name=custom,json"`
	Documents       *CreateProjectRequestBodyDocuments   `multipartForm:"file"`
	Glossaries      *CreateProjectRequestBodyGlossaries  `multipartForm:"file"`
	SourceLanguage  *string                              `multipartForm:"name=source_language"`
	Styleguides     *CreateProjectRequestBodyStyleguides `multipartForm:"file"`
	TargetLanguages []string                             `multipartForm:"name=target_languages[],json"`
}

type CreateProjectRequest struct {
	Request *CreateProjectRequestBody `request:"mediaType=multipart/form-data"`
}

type CreateProjectResponse struct {
	ContentType string
	Error       *shared.Error
	Project     *shared.Project
	StatusCode  int64
}
