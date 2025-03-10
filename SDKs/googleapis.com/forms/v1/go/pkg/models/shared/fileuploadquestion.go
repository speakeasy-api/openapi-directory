// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type FileUploadQuestionTypesEnum string

const (
	FileUploadQuestionTypesEnumFileTypeUnspecified FileUploadQuestionTypesEnum = "FILE_TYPE_UNSPECIFIED"
	FileUploadQuestionTypesEnumAny                 FileUploadQuestionTypesEnum = "ANY"
	FileUploadQuestionTypesEnumDocument            FileUploadQuestionTypesEnum = "DOCUMENT"
	FileUploadQuestionTypesEnumPresentation        FileUploadQuestionTypesEnum = "PRESENTATION"
	FileUploadQuestionTypesEnumSpreadsheet         FileUploadQuestionTypesEnum = "SPREADSHEET"
	FileUploadQuestionTypesEnumDrawing             FileUploadQuestionTypesEnum = "DRAWING"
	FileUploadQuestionTypesEnumPdf                 FileUploadQuestionTypesEnum = "PDF"
	FileUploadQuestionTypesEnumImage               FileUploadQuestionTypesEnum = "IMAGE"
	FileUploadQuestionTypesEnumVideo               FileUploadQuestionTypesEnum = "VIDEO"
	FileUploadQuestionTypesEnumAudio               FileUploadQuestionTypesEnum = "AUDIO"
)

func (e FileUploadQuestionTypesEnum) ToPointer() *FileUploadQuestionTypesEnum {
	return &e
}

func (e *FileUploadQuestionTypesEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "FILE_TYPE_UNSPECIFIED":
		fallthrough
	case "ANY":
		fallthrough
	case "DOCUMENT":
		fallthrough
	case "PRESENTATION":
		fallthrough
	case "SPREADSHEET":
		fallthrough
	case "DRAWING":
		fallthrough
	case "PDF":
		fallthrough
	case "IMAGE":
		fallthrough
	case "VIDEO":
		fallthrough
	case "AUDIO":
		*e = FileUploadQuestionTypesEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FileUploadQuestionTypesEnum: %v", v)
	}
}

// FileUploadQuestion - A file upload question. The API currently does not support creating file upload questions.
type FileUploadQuestion struct {
	// Required. The ID of the Drive folder where uploaded files are stored.
	FolderID *string `json:"folderId,omitempty"`
	// Maximum number of bytes allowed for any single file uploaded to this question.
	MaxFileSize *string `json:"maxFileSize,omitempty"`
	// Maximum number of files that can be uploaded for this question in a single response.
	MaxFiles *int `json:"maxFiles,omitempty"`
	// File types accepted by this question.
	Types []FileUploadQuestionTypesEnum `json:"types,omitempty"`
}
