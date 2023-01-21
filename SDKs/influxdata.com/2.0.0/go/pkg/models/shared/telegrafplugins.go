package shared

type TelegrafPlugins struct {
	Os      *string          `json:"os,omitempty"`
	Plugins []TelegrafPlugin `json:"plugins,omitempty"`
	Version *string          `json:"version,omitempty"`
}
