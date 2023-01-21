package shared

type ProductViewAggregatedDestinationStatusEnum string

const (
	ProductViewAggregatedDestinationStatusEnumAggregatedStatusUnspecified ProductViewAggregatedDestinationStatusEnum = "AGGREGATED_STATUS_UNSPECIFIED"
	ProductViewAggregatedDestinationStatusEnumNotEligibleOrDisapproved    ProductViewAggregatedDestinationStatusEnum = "NOT_ELIGIBLE_OR_DISAPPROVED"
	ProductViewAggregatedDestinationStatusEnumPending                     ProductViewAggregatedDestinationStatusEnum = "PENDING"
	ProductViewAggregatedDestinationStatusEnumEligibleLimited             ProductViewAggregatedDestinationStatusEnum = "ELIGIBLE_LIMITED"
	ProductViewAggregatedDestinationStatusEnumEligible                    ProductViewAggregatedDestinationStatusEnum = "ELIGIBLE"
)

type ProductViewChannelEnum string

const (
	ProductViewChannelEnumChannelUnspecified ProductViewChannelEnum = "CHANNEL_UNSPECIFIED"
	ProductViewChannelEnumLocal              ProductViewChannelEnum = "LOCAL"
	ProductViewChannelEnumOnline             ProductViewChannelEnum = "ONLINE"
)

// ProductView
// Product fields. Values are only set for fields requested explicitly in the request's search query. Available only to selected merchants. Submit the [interest form](https://forms.gle/7Uy8htzAN8oNokz9A) to request access.
type ProductView struct {
	AggregatedDestinationStatus *ProductViewAggregatedDestinationStatusEnum `json:"aggregatedDestinationStatus,omitempty"`
	Availability                *string                                     `json:"availability,omitempty"`
	Brand                       *string                                     `json:"brand,omitempty"`
	CategoryL1                  *string                                     `json:"categoryL1,omitempty"`
	CategoryL2                  *string                                     `json:"categoryL2,omitempty"`
	CategoryL3                  *string                                     `json:"categoryL3,omitempty"`
	CategoryL4                  *string                                     `json:"categoryL4,omitempty"`
	CategoryL5                  *string                                     `json:"categoryL5,omitempty"`
	Channel                     *ProductViewChannelEnum                     `json:"channel,omitempty"`
	Condition                   *string                                     `json:"condition,omitempty"`
	CreationTime                *string                                     `json:"creationTime,omitempty"`
	CurrencyCode                *string                                     `json:"currencyCode,omitempty"`
	ExpirationDate              *Date                                       `json:"expirationDate,omitempty"`
	Gtin                        []string                                    `json:"gtin,omitempty"`
	ID                          *string                                     `json:"id,omitempty"`
	ItemGroupID                 *string                                     `json:"itemGroupId,omitempty"`
	ItemIssues                  []ProductViewItemIssue                      `json:"itemIssues,omitempty"`
	LanguageCode                *string                                     `json:"languageCode,omitempty"`
	OfferID                     *string                                     `json:"offerId,omitempty"`
	PriceMicros                 *string                                     `json:"priceMicros,omitempty"`
	ProductTypeL1               *string                                     `json:"productTypeL1,omitempty"`
	ProductTypeL2               *string                                     `json:"productTypeL2,omitempty"`
	ProductTypeL3               *string                                     `json:"productTypeL3,omitempty"`
	ProductTypeL4               *string                                     `json:"productTypeL4,omitempty"`
	ProductTypeL5               *string                                     `json:"productTypeL5,omitempty"`
	ShippingLabel               *string                                     `json:"shippingLabel,omitempty"`
	Title                       *string                                     `json:"title,omitempty"`
}
