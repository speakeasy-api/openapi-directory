package shared

// GoogleCloudContentwarehouseV1MapProperty
// Map property value. Represents a structured entries of key value pairs, consisting of field names which map to dynamically typed values.
type GoogleCloudContentwarehouseV1MapProperty struct {
	Fields map[string]GoogleCloudContentwarehouseV1Value `json:"fields,omitempty"`
}
