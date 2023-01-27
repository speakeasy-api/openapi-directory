package shared

type KmsEnvMap struct {
	CipherText *string `json:"cipherText,omitempty"`
	KeyName    *string `json:"keyName,omitempty"`
}
