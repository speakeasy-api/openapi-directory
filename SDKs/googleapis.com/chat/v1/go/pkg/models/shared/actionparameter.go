// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ActionParameter - List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
type ActionParameter struct {
	// The name of the parameter for the action script.
	Key *string `json:"key,omitempty"`
	// The value of the parameter.
	Value *string `json:"value,omitempty"`
}
