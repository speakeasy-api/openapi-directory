package shared

type GitRemoteSettingsTokenStatusEnum string

const (
	GitRemoteSettingsTokenStatusEnumTokenStatusUnspecified GitRemoteSettingsTokenStatusEnum = "TOKEN_STATUS_UNSPECIFIED"
	GitRemoteSettingsTokenStatusEnumNotFound               GitRemoteSettingsTokenStatusEnum = "NOT_FOUND"
	GitRemoteSettingsTokenStatusEnumInvalid                GitRemoteSettingsTokenStatusEnum = "INVALID"
	GitRemoteSettingsTokenStatusEnumValid                  GitRemoteSettingsTokenStatusEnum = "VALID"
)

// GitRemoteSettings
// Controls Git remote configuration for a repository.
type GitRemoteSettings struct {
	AuthenticationTokenSecretVersion *string                           `json:"authenticationTokenSecretVersion,omitempty"`
	DefaultBranch                    *string                           `json:"defaultBranch,omitempty"`
	TokenStatus                      *GitRemoteSettingsTokenStatusEnum `json:"tokenStatus,omitempty"`
	URL                              *string                           `json:"url,omitempty"`
}

// GitRemoteSettingsInput
// Controls Git remote configuration for a repository.
type GitRemoteSettingsInput struct {
	AuthenticationTokenSecretVersion *string `json:"authenticationTokenSecretVersion,omitempty"`
	DefaultBranch                    *string `json:"defaultBranch,omitempty"`
	URL                              *string `json:"url,omitempty"`
}
