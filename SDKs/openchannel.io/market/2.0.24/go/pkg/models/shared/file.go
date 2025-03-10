// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// FileMimeCheckEnum - The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED
type FileMimeCheckEnum string

const (
	FileMimeCheckEnumPassed FileMimeCheckEnum = "PASSED"
	FileMimeCheckEnumFailed FileMimeCheckEnum = "FAILED"
)

func (e FileMimeCheckEnum) ToPointer() *FileMimeCheckEnum {
	return &e
}

func (e *FileMimeCheckEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PASSED":
		fallthrough
	case "FAILED":
		*e = FileMimeCheckEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FileMimeCheckEnum: %v", v)
	}
}

// File - The file ids of the uploaded file
type File struct {
	// The internet media type of the file
	ContentType *string
	// The id of the uploaded file
	FileID string
	// The path where the file can be located.
	FileURL *string
	// The hashes requested for the file.
	Hash *Hash
	// The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED
	MimeCheck *FileMimeCheckEnum
	// The name of the uploaded file
	Name string
	// The number of bytes in the uploaded file
	Size int64
	// The time in milliseconds when the file was uploaded
	UploadDate int64
	// The virus scan results for this file
	VirusScan *VirusScan
}
