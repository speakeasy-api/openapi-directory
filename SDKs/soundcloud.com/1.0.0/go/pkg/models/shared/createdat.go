package shared

type CreatedAt struct {
	From *string `queryParam:"name=from"`
	To   *string `queryParam:"name=to"`
}
