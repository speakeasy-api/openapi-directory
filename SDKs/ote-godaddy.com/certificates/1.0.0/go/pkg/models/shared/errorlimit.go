package shared

type ErrorLimit struct {
	Code          string
	Fields        []interface{}
	Message       *string
	RetryAfterSec int64
}
