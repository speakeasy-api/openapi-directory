// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DataStats - The data statistics of a series of values that share the same DataType.
type DataStats struct {
	// The data statistics of a series of ARRAY values.
	ArrayStats *ArrayStats `json:"arrayStats,omitempty"`
	// The data statistics of a series of CATEGORY values.
	CategoryStats *CategoryStats `json:"categoryStats,omitempty"`
	// The number of distinct values.
	DistinctValueCount *string `json:"distinctValueCount,omitempty"`
	// The data statistics of a series of FLOAT64 values.
	Float64Stats *Float64Stats `json:"float64Stats,omitempty"`
	// The number of values that are null.
	NullValueCount *string `json:"nullValueCount,omitempty"`
	// The data statistics of a series of STRING values.
	StringStats *StringStats `json:"stringStats,omitempty"`
	// The data statistics of a series of STRUCT values.
	StructStats *StructStats `json:"structStats,omitempty"`
	// The data statistics of a series of TIMESTAMP values.
	TimestampStats *TimestampStats `json:"timestampStats,omitempty"`
	// The number of values that are valid.
	ValidValueCount *string `json:"validValueCount,omitempty"`
}
