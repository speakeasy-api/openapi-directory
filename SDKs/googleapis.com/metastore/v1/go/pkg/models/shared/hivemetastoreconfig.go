package shared

// HiveMetastoreConfig
// Specifies configuration information specific to running Hive metastore software as the metastore service.
type HiveMetastoreConfig struct {
	ConfigOverrides map[string]string `json:"configOverrides,omitempty"`
	KerberosConfig  *KerberosConfig   `json:"kerberosConfig,omitempty"`
	Version         *string           `json:"version,omitempty"`
}
