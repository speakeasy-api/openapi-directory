// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CounterStructuredNameAndMetadata - A single message which encapsulates structured name and metadata for a given counter.
type CounterStructuredNameAndMetadata struct {
	// CounterMetadata includes all static non-name non-value counter attributes.
	Metadata *CounterMetadata `json:"metadata,omitempty"`
	// Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
	Name *CounterStructuredName `json:"name,omitempty"`
}
