package shared

type Duration struct {
	From *int64 `queryParam:"name=from"`
	To   *int64 `queryParam:"name=to"`
}
