package shared

// OoxmlDocument
// Base model for all types
type OoxmlDocument struct {
	DeleteTargetOnStoryDelete *bool   `json:"delete_target_on_story_delete,omitempty"`
	OoxmlAutomationID         *string `json:"ooxml_automation_id,omitempty"`
	StoryID                   *string `json:"story_id,omitempty"`
}
