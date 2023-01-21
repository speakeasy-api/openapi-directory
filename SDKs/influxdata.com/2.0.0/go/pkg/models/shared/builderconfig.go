package shared

type BuilderConfigAggregateWindow struct {
	FillValues *bool   `json:"fillValues,omitempty"`
	Period     *string `json:"period,omitempty"`
}

type BuilderConfig struct {
	AggregateWindow *BuilderConfigAggregateWindow `json:"aggregateWindow,omitempty"`
	Buckets         []string                      `json:"buckets,omitempty"`
	Functions       []BuilderFunctionsType        `json:"functions,omitempty"`
	Tags            []BuilderTagsType             `json:"tags,omitempty"`
}
