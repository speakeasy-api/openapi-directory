// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RetrieveInventoryTransferResponse - Success
type RetrieveInventoryTransferResponse struct {
	// Any errors that occurred during the request.
	Errors []Error `json:"errors,omitempty"`
	// Represents the transfer of a quantity of product inventory at a
	// particular time from one location to another.
	Transfer *InventoryTransfer `json:"transfer,omitempty"`
}
