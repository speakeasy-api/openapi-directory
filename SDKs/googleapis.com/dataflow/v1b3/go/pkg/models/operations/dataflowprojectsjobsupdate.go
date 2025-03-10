// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsUpdateSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DataflowProjectsJobsUpdateSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DataflowProjectsJobsUpdateSecurityOption3 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DataflowProjectsJobsUpdateSecurityOption4 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type DataflowProjectsJobsUpdateSecurity struct {
	Option1 *DataflowProjectsJobsUpdateSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsUpdateSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsUpdateSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsUpdateSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsUpdateRequest struct {
	// V1 error format.
	DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	JobInput    *shared.JobInput  `request:"mediaType=application/json"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// The job ID.
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
	Location *string `queryParam:"style=form,explode=true,name=location"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// The ID of the Cloud Platform project that the job belongs to.
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, we will first handle RequestedJobState and then the update_mask fields.
	UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsJobsUpdateResponse struct {
	ContentType string
	// Successful response
	Job         *shared.Job
	StatusCode  int
	RawResponse *http.Response
}
