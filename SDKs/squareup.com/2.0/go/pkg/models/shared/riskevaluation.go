package shared

// RiskEvaluation
// Represents fraud risk information for the associated payment.
//
// When you take a payment through Square's Payments API (using the `CreatePayment`
// endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
// can use this information to determine the course of action (for example,
// provide the goods/services or refund the payment).
type RiskEvaluation struct {
	CreatedAt *string `json:"created_at,omitempty"`
	RiskLevel *string `json:"risk_level,omitempty"`
}
