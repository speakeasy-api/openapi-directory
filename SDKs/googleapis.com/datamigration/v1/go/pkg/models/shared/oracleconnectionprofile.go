package shared

// OracleConnectionProfile
// Specifies connection parameters required specifically for Oracle databases.
type OracleConnectionProfile struct {
	DatabaseService             *string                       `json:"databaseService,omitempty"`
	ForwardSSHConnectivity      *ForwardSSHTunnelConnectivity `json:"forwardSshConnectivity,omitempty"`
	Host                        *string                       `json:"host,omitempty"`
	Password                    *string                       `json:"password,omitempty"`
	PasswordSet                 *bool                         `json:"passwordSet,omitempty"`
	Port                        *int32                        `json:"port,omitempty"`
	PrivateConnectivity         *PrivateConnectivity          `json:"privateConnectivity,omitempty"`
	StaticServiceIPConnectivity map[string]interface{}        `json:"staticServiceIpConnectivity,omitempty"`
	Username                    *string                       `json:"username,omitempty"`
}

// OracleConnectionProfileInput
// Specifies connection parameters required specifically for Oracle databases.
type OracleConnectionProfileInput struct {
	DatabaseService             *string                       `json:"databaseService,omitempty"`
	ForwardSSHConnectivity      *ForwardSSHTunnelConnectivity `json:"forwardSshConnectivity,omitempty"`
	Host                        *string                       `json:"host,omitempty"`
	Password                    *string                       `json:"password,omitempty"`
	Port                        *int32                        `json:"port,omitempty"`
	PrivateConnectivity         *PrivateConnectivity          `json:"privateConnectivity,omitempty"`
	StaticServiceIPConnectivity map[string]interface{}        `json:"staticServiceIpConnectivity,omitempty"`
	Username                    *string                       `json:"username,omitempty"`
}
