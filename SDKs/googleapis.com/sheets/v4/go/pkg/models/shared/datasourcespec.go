// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DataSourceSpec - This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
type DataSourceSpec struct {
	// The specification of a BigQuery data source that's connected to a sheet.
	BigQuery *BigQueryDataSourceSpec `json:"bigQuery,omitempty"`
	// The parameters of the data source, used when querying the data source.
	Parameters []DataSourceParameter `json:"parameters,omitempty"`
}
