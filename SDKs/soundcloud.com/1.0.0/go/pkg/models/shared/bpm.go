package shared

type Bpm struct {
	From *int64 `queryParam:"name=from"`
	To   *int64 `queryParam:"name=to"`
}
