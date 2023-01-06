package shared

type JiraStatusMapping struct {
	Accepted *string `json:"accepted,omitempty"`
	Fixed    *string `json:"fixed,omitempty"`
	Invalid  *string `json:"invalid,omitempty"`
	Notfixed *string `json:"notfixed,omitempty"`
}
