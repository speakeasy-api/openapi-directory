package operations

import (
	"openapi/pkg/models/shared"
)

type InsertSalesActivityPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type InsertSalesActivityRequestBody struct {
	Subject   *string `multipartForm:"name=subject"`
	Timestamp *int64  `multipartForm:"name=timestamp"`
	Type      *string `multipartForm:"name=type"`
}

type InsertSalesActivityRequest struct {
	PathParams InsertSalesActivityPathParams
	Request    *InsertSalesActivityRequestBody `request:"mediaType=multipart/form-data"`
}

type InsertSalesActivityResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
