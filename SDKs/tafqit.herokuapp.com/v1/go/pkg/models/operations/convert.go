package operations

type ConvertRequestBody struct {
	HundredsForm *string `multipartForm:"name=hundreds_form"`
	TheNumber    *string `multipartForm:"name=the_number"`
	Unit         *string `multipartForm:"name=unit"`
}

type ConvertRequest struct {
	Request *ConvertRequestBody `request:"mediaType=multipart/form-data"`
}

type ConvertResponse struct {
	ContentType string
	StatusCode  int64
}
