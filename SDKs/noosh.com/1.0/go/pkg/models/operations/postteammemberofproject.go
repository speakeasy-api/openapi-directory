package operations

type PostTeamMemberOfProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostTeamMemberOfProjectRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	TeamMemberPO     *interface{} `request:"mediaType=application/json"`
	TeamMemberPo1    *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PostTeamMemberOfProjectRequest struct {
	PathParams PostTeamMemberOfProjectPathParams
	Request    *PostTeamMemberOfProjectRequests
}

type PostTeamMemberOfProjectResponse struct {
	Body                           []byte
	ContentType                    string
	HTTPStatusVO                   *interface{}
	StatusCode                     int64
	V1x1InvitedTeamMemberResultsVO *interface{}
}
