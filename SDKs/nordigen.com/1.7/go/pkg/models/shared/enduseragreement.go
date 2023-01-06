package shared

import (
	"time"
)

// EndUserAgreement
// Represents an end-user agreement.
type EndUserAgreement struct {
	Accepted           *time.Time `json:"accepted,omitempty"`
	AccessScope        []string   `json:"access_scope,omitempty"`
	AccessValidForDays *int64     `json:"access_valid_for_days,omitempty"`
	AspspID            string     `json:"aspsp_id"`
	Created            *time.Time `json:"created,omitempty"`
	EnduserID          string     `json:"enduser_id"`
	ID                 *string    `json:"id,omitempty"`
	MaxHistoricalDays  int64      `json:"max_historical_days"`
}

// EndUserAgreementInput
// Represents an end-user agreement.
type EndUserAgreementInput struct {
	AccessScope       []string `json:"access_scope,omitempty" form:"name=access_scope" multipartForm:"name=access_scope,json"`
	AspspID           string   `json:"aspsp_id" form:"name=aspsp_id" multipartForm:"name=aspsp_id"`
	EnduserID         string   `json:"enduser_id" form:"name=enduser_id" multipartForm:"name=enduser_id"`
	MaxHistoricalDays int64    `json:"max_historical_days" form:"name=max_historical_days" multipartForm:"name=max_historical_days"`
}
