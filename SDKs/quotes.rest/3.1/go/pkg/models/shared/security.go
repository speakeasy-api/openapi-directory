package shared

type SchemeXTheySaidSoAPISecret struct {
	APIKey string `security:"name=X-TheySaidSo-Api-Secret"`
}
