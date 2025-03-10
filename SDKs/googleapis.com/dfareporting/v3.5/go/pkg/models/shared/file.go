// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// FileFormatEnum - The output format of the report. Only available once the file is available.
type FileFormatEnum string

const (
	FileFormatEnumCsv   FileFormatEnum = "CSV"
	FileFormatEnumExcel FileFormatEnum = "EXCEL"
)

func (e FileFormatEnum) ToPointer() *FileFormatEnum {
	return &e
}

func (e *FileFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CSV":
		fallthrough
	case "EXCEL":
		*e = FileFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FileFormatEnum: %v", v)
	}
}

// FileStatusEnum - The status of the report file.
type FileStatusEnum string

const (
	FileStatusEnumProcessing      FileStatusEnum = "PROCESSING"
	FileStatusEnumReportAvailable FileStatusEnum = "REPORT_AVAILABLE"
	FileStatusEnumFailed          FileStatusEnum = "FAILED"
	FileStatusEnumCancelled       FileStatusEnum = "CANCELLED"
)

func (e FileStatusEnum) ToPointer() *FileStatusEnum {
	return &e
}

func (e *FileStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PROCESSING":
		fallthrough
	case "REPORT_AVAILABLE":
		fallthrough
	case "FAILED":
		fallthrough
	case "CANCELLED":
		*e = FileStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FileStatusEnum: %v", v)
	}
}

// FileUrls - The URLs where the completed report file can be downloaded.
type FileUrls struct {
	// The URL for downloading the report data through the API.
	APIURL *string `json:"apiUrl,omitempty"`
	// The URL for downloading the report data through a browser.
	BrowserURL *string `json:"browserUrl,omitempty"`
}

// File - Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
type File struct {
	// Represents a date range.
	DateRange *DateRange `json:"dateRange,omitempty"`
	// Etag of this resource.
	Etag *string `json:"etag,omitempty"`
	// The filename of the file.
	FileName *string `json:"fileName,omitempty"`
	// The output format of the report. Only available once the file is available.
	Format *FileFormatEnum `json:"format,omitempty"`
	// The unique ID of this report file.
	ID *string `json:"id,omitempty"`
	// Identifies what kind of resource this is. Value: the fixed string "dfareporting#file".
	Kind *string `json:"kind,omitempty"`
	// The timestamp in milliseconds since epoch when this file was last modified.
	LastModifiedTime *string `json:"lastModifiedTime,omitempty"`
	// The ID of the report this file was generated from.
	ReportID *string `json:"reportId,omitempty"`
	// The status of the report file.
	Status *FileStatusEnum `json:"status,omitempty"`
	// The URLs where the completed report file can be downloaded.
	Urls *FileUrls `json:"urls,omitempty"`
}
