package shared

// Group
// Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.
type Group struct {
	AdminCreated       *bool    `json:"adminCreated,omitempty"`
	Aliases            []string `json:"aliases,omitempty"`
	Description        *string  `json:"description,omitempty"`
	DirectMembersCount *string  `json:"directMembersCount,omitempty"`
	Email              *string  `json:"email,omitempty"`
	Etag               *string  `json:"etag,omitempty"`
	ID                 *string  `json:"id,omitempty"`
	Kind               *string  `json:"kind,omitempty"`
	Name               *string  `json:"name,omitempty"`
	NonEditableAliases []string `json:"nonEditableAliases,omitempty"`
}
