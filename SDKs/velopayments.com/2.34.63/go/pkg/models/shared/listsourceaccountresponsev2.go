// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListSourceAccountResponseV2 - List Source Accounts Response Object
type ListSourceAccountResponseV2 struct {
	Content []SourceAccountResponseV2          `json:"content,omitempty"`
	Links   []ListSourceAccountResponseV2Links `json:"links,omitempty"`
	Page    *PagedUserResponsePage             `json:"page,omitempty"`
}
