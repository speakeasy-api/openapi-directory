package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListMembersInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsListMembersInOrgQueryParams struct {
	Page    *int64               `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64               `queryParam:"style=form,explode=true,name=per_page"`
	Role    *shared.TeamSlugEnum `queryParam:"style=form,explode=true,name=role"`
}

type TeamsListMembersInOrgRequest struct {
	PathParams  TeamsListMembersInOrgPathParams
	QueryParams TeamsListMembersInOrgQueryParams
}

type TeamsListMembersInOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
