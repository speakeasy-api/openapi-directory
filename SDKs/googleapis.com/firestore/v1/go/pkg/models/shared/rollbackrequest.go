// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RollbackRequest - The request for Firestore.Rollback.
type RollbackRequest struct {
	// Required. The transaction to roll back.
	Transaction *string `json:"transaction,omitempty"`
}
