package shared

type SchemeAzureaadv2 struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	Azureaadv2 SchemeAzureaadv2 `security:"scheme,type=oauth2"`
}
