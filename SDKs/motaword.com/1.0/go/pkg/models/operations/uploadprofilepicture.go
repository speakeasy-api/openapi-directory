package operations

import (
	"openapi/pkg/models/shared"
)

type UploadProfilePictureRequestBodyProfilePicture struct {
	Content        []byte `multipartForm:"content"`
	ProfilePicture string `multipartForm:"name=profile_picture"`
}

type UploadProfilePictureRequestBody struct {
	ProfilePicture UploadProfilePictureRequestBodyProfilePicture `multipartForm:"file"`
}

type UploadProfilePictureRequest struct {
	Request *UploadProfilePictureRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadProfilePictureResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
