// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type MssqlLogShippingLinks struct {
	PrimaryDatabase   Link  `json:"primaryDatabase"`
	SecondaryDatabase *Link `json:"secondaryDatabase,omitempty"`
	SecondaryInstance Link  `json:"secondaryInstance"`
	SeedRequest       *Link `json:"seedRequest,omitempty"`
}
