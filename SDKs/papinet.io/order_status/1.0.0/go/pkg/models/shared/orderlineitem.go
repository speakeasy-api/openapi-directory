package shared

type OrderLineItemOrderLineItemStatusEnum string

const (
	OrderLineItemOrderLineItemStatusEnumCancelled           OrderLineItemOrderLineItemStatusEnum = "Cancelled"
	OrderLineItemOrderLineItemStatusEnumCompleted           OrderLineItemOrderLineItemStatusEnum = "Completed"
	OrderLineItemOrderLineItemStatusEnumConfirmed           OrderLineItemOrderLineItemStatusEnum = "Confirmed"
	OrderLineItemOrderLineItemStatusEnumPending             OrderLineItemOrderLineItemStatusEnum = "Pending"
	OrderLineItemOrderLineItemStatusEnumProductionCompleted OrderLineItemOrderLineItemStatusEnum = "ProductionCompleted"
	OrderLineItemOrderLineItemStatusEnumShipmentCompleted   OrderLineItemOrderLineItemStatusEnum = "ShipmentCompleted"
)

type OrderLineItemQuantitiesQuantityContextEnum string

const (
	OrderLineItemQuantitiesQuantityContextEnumConfirmed OrderLineItemQuantitiesQuantityContextEnum = "Confirmed"
	OrderLineItemQuantitiesQuantityContextEnumInvoiced  OrderLineItemQuantitiesQuantityContextEnum = "Invoiced"
	OrderLineItemQuantitiesQuantityContextEnumOrdered   OrderLineItemQuantitiesQuantityContextEnum = "Ordered"
	OrderLineItemQuantitiesQuantityContextEnumProduced  OrderLineItemQuantitiesQuantityContextEnum = "Produced"
	OrderLineItemQuantitiesQuantityContextEnumShipped   OrderLineItemQuantitiesQuantityContextEnum = "Shipped"
)

type OrderLineItemQuantitiesQuantityTypeEnum string

const (
	OrderLineItemQuantitiesQuantityTypeEnumArea          OrderLineItemQuantitiesQuantityTypeEnum = "Area"
	OrderLineItemQuantitiesQuantityTypeEnumCount         OrderLineItemQuantitiesQuantityTypeEnum = "Count"
	OrderLineItemQuantitiesQuantityTypeEnumGrossWeight   OrderLineItemQuantitiesQuantityTypeEnum = "GrossWeight"
	OrderLineItemQuantitiesQuantityTypeEnumLength        OrderLineItemQuantitiesQuantityTypeEnum = "Length"
	OrderLineItemQuantitiesQuantityTypeEnumNetNetWeight  OrderLineItemQuantitiesQuantityTypeEnum = "NetNetWeight"
	OrderLineItemQuantitiesQuantityTypeEnumNetWeight     OrderLineItemQuantitiesQuantityTypeEnum = "NetWeight"
	OrderLineItemQuantitiesQuantityTypeEnumNominalWeight OrderLineItemQuantitiesQuantityTypeEnum = "NominalWeight"
	OrderLineItemQuantitiesQuantityTypeEnumTareWeight    OrderLineItemQuantitiesQuantityTypeEnum = "TareWeight"
)

type OrderLineItemQuantitiesQuantityUomEnum string

const (
	OrderLineItemQuantitiesQuantityUOMEnumBale                      OrderLineItemQuantitiesQuantityUomEnum = "Bale"
	OrderLineItemQuantitiesQuantityUOMEnumBox                       OrderLineItemQuantitiesQuantityUomEnum = "Box"
	OrderLineItemQuantitiesQuantityUOMEnumCentimeter                OrderLineItemQuantitiesQuantityUomEnum = "Centimeter"
	OrderLineItemQuantitiesQuantityUOMEnumDecimeter                 OrderLineItemQuantitiesQuantityUomEnum = "Decimeter"
	OrderLineItemQuantitiesQuantityUOMEnumFoot                      OrderLineItemQuantitiesQuantityUomEnum = "Foot"
	OrderLineItemQuantitiesQuantityUOMEnumGram                      OrderLineItemQuantitiesQuantityUomEnum = "Gram"
	OrderLineItemQuantitiesQuantityUOMEnumHundredPounds             OrderLineItemQuantitiesQuantityUomEnum = "HundredPounds"
	OrderLineItemQuantitiesQuantityUOMEnumInch                      OrderLineItemQuantitiesQuantityUomEnum = "Inch"
	OrderLineItemQuantitiesQuantityUOMEnumKilogram                  OrderLineItemQuantitiesQuantityUomEnum = "Kilogram"
	OrderLineItemQuantitiesQuantityUOMEnumKilometer                 OrderLineItemQuantitiesQuantityUomEnum = "Kilometer"
	OrderLineItemQuantitiesQuantityUOMEnumMeter                     OrderLineItemQuantitiesQuantityUomEnum = "Meter"
	OrderLineItemQuantitiesQuantityUOMEnumMetricTon                 OrderLineItemQuantitiesQuantityUomEnum = "MetricTon"
	OrderLineItemQuantitiesQuantityUOMEnumMillimeter                OrderLineItemQuantitiesQuantityUomEnum = "Millimeter"
	OrderLineItemQuantitiesQuantityUOMEnumPackage                   OrderLineItemQuantitiesQuantityUomEnum = "Package"
	OrderLineItemQuantitiesQuantityUOMEnumPalletUnit                OrderLineItemQuantitiesQuantityUomEnum = "PalletUnit"
	OrderLineItemQuantitiesQuantityUOMEnumPiece                     OrderLineItemQuantitiesQuantityUomEnum = "Piece"
	OrderLineItemQuantitiesQuantityUOMEnumPound                     OrderLineItemQuantitiesQuantityUomEnum = "Pound"
	OrderLineItemQuantitiesQuantityUOMEnumPulpUnit                  OrderLineItemQuantitiesQuantityUomEnum = "PulpUnit"
	OrderLineItemQuantitiesQuantityUOMEnumReam                      OrderLineItemQuantitiesQuantityUomEnum = "Ream"
	OrderLineItemQuantitiesQuantityUOMEnumReel                      OrderLineItemQuantitiesQuantityUomEnum = "Reel"
	OrderLineItemQuantitiesQuantityUOMEnumSheet                     OrderLineItemQuantitiesQuantityUomEnum = "Sheet"
	OrderLineItemQuantitiesQuantityUOMEnumShortTon                  OrderLineItemQuantitiesQuantityUomEnum = "ShortTon"
	OrderLineItemQuantitiesQuantityUOMEnumSkid                      OrderLineItemQuantitiesQuantityUomEnum = "Skid"
	OrderLineItemQuantitiesQuantityUOMEnumSquareDecimeter           OrderLineItemQuantitiesQuantityUomEnum = "SquareDecimeter"
	OrderLineItemQuantitiesQuantityUOMEnumSquareFoot                OrderLineItemQuantitiesQuantityUomEnum = "SquareFoot"
	OrderLineItemQuantitiesQuantityUOMEnumSquareInch                OrderLineItemQuantitiesQuantityUomEnum = "SquareInch"
	OrderLineItemQuantitiesQuantityUOMEnumSquareMeter               OrderLineItemQuantitiesQuantityUomEnum = "SquareMeter"
	OrderLineItemQuantitiesQuantityUOMEnumThousandPieces            OrderLineItemQuantitiesQuantityUomEnum = "ThousandPieces"
	OrderLineItemQuantitiesQuantityUOMEnumThousandSquareCentimeters OrderLineItemQuantitiesQuantityUomEnum = "ThousandSquareCentimeters"
	OrderLineItemQuantitiesQuantityUOMEnumThousandSquareFeet        OrderLineItemQuantitiesQuantityUomEnum = "ThousandSquareFeet"
	OrderLineItemQuantitiesQuantityUOMEnumThousandSquareInches      OrderLineItemQuantitiesQuantityUomEnum = "ThousandSquareInches"
	OrderLineItemQuantitiesQuantityUOMEnumYard                      OrderLineItemQuantitiesQuantityUomEnum = "Yard"
)

type OrderLineItemQuantities struct {
	QuantityContext *OrderLineItemQuantitiesQuantityContextEnum `json:"quantityContext,omitempty"`
	QuantityType    *OrderLineItemQuantitiesQuantityTypeEnum    `json:"quantityType,omitempty"`
	QuantityUOM     *OrderLineItemQuantitiesQuantityUomEnum     `json:"quantityUOM,omitempty"`
	QuantityValue   *float64                                    `json:"quantityValue,omitempty"`
}

type OrderLineItem struct {
	Changeable          *bool                                `json:"changeable,omitempty"`
	ID                  string                               `json:"id"`
	OrderLineItemNumber float64                              `json:"orderLineItemNumber"`
	OrderLineItemStatus OrderLineItemOrderLineItemStatusEnum `json:"orderLineItemStatus"`
	Quantities          []OrderLineItemQuantities            `json:"quantities,omitempty"`
}
