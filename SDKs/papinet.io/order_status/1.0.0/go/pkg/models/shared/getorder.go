package shared

type GetOrder struct {
	Links          *PaginationLinks `json:"links,omitempty"`
	OrderLineItems []OrderLineItem  `json:"orderLineItems,omitempty"`
}
