// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// InventorySourceAccessors - The partner or advertisers with access to the inventory source.
type InventorySourceAccessors struct {
	// The advertisers with access to the inventory source.
	Advertisers *InventorySourceAccessorsAdvertiserAccessors `json:"advertisers,omitempty"`
	// The partner with access to the inventory source.
	Partner *InventorySourceAccessorsPartnerAccessor `json:"partner,omitempty"`
}
