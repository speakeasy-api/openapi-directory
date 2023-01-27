package shared

// Repository
// Represents a Dataform Git repository.
type Repository struct {
	GitRemoteSettings                      *GitRemoteSettings `json:"gitRemoteSettings,omitempty"`
	Name                                   *string            `json:"name,omitempty"`
	NpmrcEnvironmentVariablesSecretVersion *string            `json:"npmrcEnvironmentVariablesSecretVersion,omitempty"`
}

// RepositoryInput
// Represents a Dataform Git repository.
type RepositoryInput struct {
	GitRemoteSettings                      *GitRemoteSettingsInput `json:"gitRemoteSettings,omitempty"`
	NpmrcEnvironmentVariablesSecretVersion *string                 `json:"npmrcEnvironmentVariablesSecretVersion,omitempty"`
}
