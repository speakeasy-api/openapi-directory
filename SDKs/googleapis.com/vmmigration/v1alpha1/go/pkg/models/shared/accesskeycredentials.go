package shared

// AccessKeyCredentials
// Message describing AWS Credentials using access key id and secret.
type AccessKeyCredentials struct {
	AccessKeyID     *string `json:"accessKeyId,omitempty"`
	SecretAccessKey *string `json:"secretAccessKey,omitempty"`
}
