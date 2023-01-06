package operations

import (
	"openapi/pkg/models/shared"
)

type UploadUserProfilePicturePathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type UploadUserProfilePictureRequestBodyProfilePicture struct {
	Content        []byte `multipartForm:"content"`
	ProfilePicture string `multipartForm:"name=profile_picture"`
}

type UploadUserProfilePictureRequestBody struct {
	ProfilePicture UploadUserProfilePictureRequestBodyProfilePicture `multipartForm:"file"`
}

type UploadUserProfilePictureSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type UploadUserProfilePictureRequest struct {
	PathParams UploadUserProfilePicturePathParams
	Request    *UploadUserProfilePictureRequestBody `request:"mediaType=multipart/form-data"`
	Security   UploadUserProfilePictureSecurity
}

type UploadUserProfilePictureResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
