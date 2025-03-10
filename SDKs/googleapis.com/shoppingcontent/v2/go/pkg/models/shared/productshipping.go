// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ProductShipping struct {
	// The CLDR territory code of the country to which an item will ship.
	Country *string `json:"country,omitempty"`
	// The location where the shipping is applicable, represented by a location group name.
	LocationGroupName *string `json:"locationGroupName,omitempty"`
	// The numeric ID of a location that the shipping rate applies to as defined in the AdWords API.
	LocationID *string `json:"locationId,omitempty"`
	// The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
	PostalCode *string `json:"postalCode,omitempty"`
	Price      *Price  `json:"price,omitempty"`
	// The geographic region to which a shipping rate applies.
	Region *string `json:"region,omitempty"`
	// A free-form description of the service class or delivery speed.
	Service *string `json:"service,omitempty"`
}
