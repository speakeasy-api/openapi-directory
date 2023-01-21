package callbacks

import (
	"openapi/pkg/models/shared"
)

type DeliveryReceiptRequest struct {
	Request shared.DeliveryReceipt `request:"mediaType=application/json"`
}

type DeliveryReceiptResponse struct {
	ContentType string
	StatusCode  int64
}
