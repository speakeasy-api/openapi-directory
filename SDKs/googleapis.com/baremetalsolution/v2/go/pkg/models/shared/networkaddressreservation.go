// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// NetworkAddressReservation - A reservation of one or more addresses in a network.
type NetworkAddressReservation struct {
	// The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2.
	EndAddress *string `json:"endAddress,omitempty"`
	// A note about this reservation, intended for human consumption.
	Note *string `json:"note,omitempty"`
	// The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2.
	StartAddress *string `json:"startAddress,omitempty"`
}
