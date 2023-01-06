package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsOrderByEnum string

const (
	GetProjectsOrderByEnumID       GetProjectsOrderByEnum = "id"
	GetProjectsOrderByEnumStatus   GetProjectsOrderByEnum = "status"
	GetProjectsOrderByEnumDelivery GetProjectsOrderByEnum = "delivery"
	GetProjectsOrderByEnumPrice    GetProjectsOrderByEnum = "price"
)

type GetProjectsQueryParams struct {
	OrderBy       *GetProjectsOrderByEnum    `queryParam:"style=form,explode=true,name=order_by"`
	OrderType     *shared.ListOrderTypeEnum  `queryParam:"style=form,explode=true,name=order_type"`
	Page          *int64                     `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int64                     `queryParam:"style=form,explode=true,name=per_page"`
	Status        []shared.ProjectStatusEnum `queryParam:"style=form,explode=true,name=status[]"`
	WithCompleted *bool                      `queryParam:"style=form,explode=true,name=with_completed"`
	WithPending   *bool                      `queryParam:"style=form,explode=true,name=with_pending"`
	WithStarted   *bool                      `queryParam:"style=form,explode=true,name=with_started"`
}

type GetProjectsRequest struct {
	QueryParams GetProjectsQueryParams
}

type GetProjectsResponse struct {
	ContentType string
	ProjectList *shared.ProjectList
	StatusCode  int64
}
