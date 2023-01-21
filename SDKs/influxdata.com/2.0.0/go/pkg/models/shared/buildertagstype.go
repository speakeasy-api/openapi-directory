package shared

type BuilderTagsType struct {
	AggregateFunctionType *BuilderAggregateFunctionTypeEnum `json:"aggregateFunctionType,omitempty"`
	Key                   *string                           `json:"key,omitempty"`
	Values                []string                          `json:"values,omitempty"`
}
