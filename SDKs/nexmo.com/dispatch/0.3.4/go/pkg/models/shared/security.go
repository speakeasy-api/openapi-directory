package shared

type SchemeBearerAuth struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
