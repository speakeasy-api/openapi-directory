package shared

type InfluxQlQueryTypeEnum string

const (
	InfluxQLQueryTypeEnumInfluxql InfluxQlQueryTypeEnum = "influxql"
)

// InfluxQlQuery
// Query influx using the InfluxQL language
type InfluxQlQuery struct {
	Bucket *string                `json:"bucket,omitempty"`
	Query  string                 `json:"query"`
	Type   *InfluxQlQueryTypeEnum `json:"type,omitempty"`
}
