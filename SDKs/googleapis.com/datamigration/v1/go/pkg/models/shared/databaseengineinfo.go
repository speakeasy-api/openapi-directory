package shared

type DatabaseEngineInfoEngineEnum string

const (
	DatabaseEngineInfoEngineEnumDatabaseEngineUnspecified DatabaseEngineInfoEngineEnum = "DATABASE_ENGINE_UNSPECIFIED"
	DatabaseEngineInfoEngineEnumMysql                     DatabaseEngineInfoEngineEnum = "MYSQL"
	DatabaseEngineInfoEngineEnumPostgresql                DatabaseEngineInfoEngineEnum = "POSTGRESQL"
	DatabaseEngineInfoEngineEnumOracle                    DatabaseEngineInfoEngineEnum = "ORACLE"
)

// DatabaseEngineInfo
// The type and version of a source or destination DB.
type DatabaseEngineInfo struct {
	Engine  *DatabaseEngineInfoEngineEnum `json:"engine,omitempty"`
	Version *string                       `json:"version,omitempty"`
}
