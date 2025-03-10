// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// TagSettingKeywordOptionEnum - Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
type TagSettingKeywordOptionEnum string

const (
	TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords     TagSettingKeywordOptionEnum = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
	TagSettingKeywordOptionEnumIgnore                            TagSettingKeywordOptionEnum = "IGNORE"
	TagSettingKeywordOptionEnumGenerateSeparateTagForEachKeyword TagSettingKeywordOptionEnum = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
)

func (e TagSettingKeywordOptionEnum) ToPointer() *TagSettingKeywordOptionEnum {
	return &e
}

func (e *TagSettingKeywordOptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PLACEHOLDER_WITH_LIST_OF_KEYWORDS":
		fallthrough
	case "IGNORE":
		fallthrough
	case "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD":
		*e = TagSettingKeywordOptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TagSettingKeywordOptionEnum: %v", v)
	}
}

// TagSetting - Tag Settings
type TagSetting struct {
	// Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.
	AdditionalKeyValues *string `json:"additionalKeyValues,omitempty"`
	// Whether static landing page URLs should be included in the tags. This setting applies only to placements.
	IncludeClickThroughUrls *bool `json:"includeClickThroughUrls,omitempty"`
	// Whether click-tracking string should be included in the tags.
	IncludeClickTracking *bool `json:"includeClickTracking,omitempty"`
	// Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
	KeywordOption *TagSettingKeywordOptionEnum `json:"keywordOption,omitempty"`
}
