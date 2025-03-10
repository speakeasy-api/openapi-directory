// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type FolderMenuGetRequest struct {
	// (optional) Filter for the folders and meters:
	//             all: load everything
	//             assigned: load only folders and meters that are assigend to a folder
	//             unassigend: load only meters that are not assigend to a folder
	//             user: load only folder and all users assigned to this folders
	//             subuserlist: load all subusers as a list
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type FolderMenuGetResponse struct {
	Body        []byte
	ContentType string
	// OK
	FolderMenuConfiguration *shared.FolderMenuConfiguration
	StatusCode              int
	RawResponse             *http.Response
}
