package shared

type SchemeMwoAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	MwoAuth SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
