package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type CreateTagTypeEnum string

const (
	CreateTagTypeEnumRegular  CreateTagTypeEnum = "Regular"
	CreateTagTypeEnumNegative CreateTagTypeEnum = "Negative"
)

type CreateTagQueryParams struct {
	Description *string            `queryParam:"style=form,explode=true,name=description"`
	Name        string             `queryParam:"style=form,explode=true,name=name"`
	Type        *CreateTagTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type CreateTagRequest struct {
	PathParams  CreateTagPathParams
	QueryParams CreateTagQueryParams
}

type CreateTagResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	StatusCode        int64
	Tag               *shared.Tag
}
