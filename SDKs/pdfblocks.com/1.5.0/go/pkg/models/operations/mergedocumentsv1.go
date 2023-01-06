package operations

type MergeDocumentsV1RequestBody struct {
	File [][]byte `multipartForm:"name=file,json"`
}

type MergeDocumentsV14XxApplicationProblemPlusJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
	Status *int64                 `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
	Type   *string                `json:"type,omitempty"`
}

type MergeDocumentsV1Request struct {
	Request MergeDocumentsV1RequestBody `request:"mediaType=multipart/form-data"`
}

type MergeDocumentsV1Response struct {
	ContentType                                         string
	StatusCode                                          int64
	MergeDocumentsV1200ApplicationPdfBinaryString       []byte
	MergeDocumentsV14XXApplicationProblemPlusJSONObject *MergeDocumentsV14XxApplicationProblemPlusJSON
}
