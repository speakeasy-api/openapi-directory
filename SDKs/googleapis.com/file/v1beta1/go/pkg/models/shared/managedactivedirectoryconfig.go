// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ManagedActiveDirectoryConfig - ManagedActiveDirectoryConfig contains all the parameters for connecting to Managed Active Directory.
type ManagedActiveDirectoryConfig struct {
	// The computer name is used as a prefix to the mount remote target. Example: if the computer_name is `my-computer`, the mount command will look like: `$mount -o vers=4,sec=krb5 my-computer.filestore.:`.
	Computer *string `json:"computer,omitempty"`
	// Fully qualified domain name.
	Domain *string `json:"domain,omitempty"`
}
