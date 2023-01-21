package shared

type TemplateEnvReferences struct {
	DefaultValue  *interface{} `json:"defaultValue,omitempty"`
	EnvRefKey     string       `json:"envRefKey"`
	ResourceField string       `json:"resourceField"`
	Value         *interface{} `json:"value,omitempty"`
}
