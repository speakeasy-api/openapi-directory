package shared

// RetrieveGiftCardFromNonceRequest
// A request to retrieve gift cards by using nonces.
type RetrieveGiftCardFromNonceRequest struct {
	Nonce string `json:"nonce"`
}
