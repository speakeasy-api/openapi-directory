package shared

// Environment
// An Environment describes a collection of environment variables to set when executing Tasks.
type Environment struct {
	EncryptedVariables *KmsEnvMap        `json:"encryptedVariables,omitempty"`
	SecretVariables    map[string]string `json:"secretVariables,omitempty"`
	Variables          map[string]string `json:"variables,omitempty"`
}
