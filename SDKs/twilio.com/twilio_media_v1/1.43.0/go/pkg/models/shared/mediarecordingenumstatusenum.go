// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// MediaRecordingEnumStatusEnum - Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
type MediaRecordingEnumStatusEnum string

const (
	MediaRecordingEnumStatusEnumProcessing MediaRecordingEnumStatusEnum = "processing"
	MediaRecordingEnumStatusEnumCompleted  MediaRecordingEnumStatusEnum = "completed"
	MediaRecordingEnumStatusEnumDeleted    MediaRecordingEnumStatusEnum = "deleted"
	MediaRecordingEnumStatusEnumFailed     MediaRecordingEnumStatusEnum = "failed"
)

func (e MediaRecordingEnumStatusEnum) ToPointer() *MediaRecordingEnumStatusEnum {
	return &e
}

func (e *MediaRecordingEnumStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "processing":
		fallthrough
	case "completed":
		fallthrough
	case "deleted":
		fallthrough
	case "failed":
		*e = MediaRecordingEnumStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for MediaRecordingEnumStatusEnum: %v", v)
	}
}
