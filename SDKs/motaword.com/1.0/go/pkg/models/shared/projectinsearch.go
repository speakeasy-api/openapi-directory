package shared

import (
	"time"
)

type ProjectInSearchPrice struct {
	Amount    *float32 `json:"amount,omitempty"`
	Currency  *string  `json:"currency,omitempty"`
	UsdAmount *float32 `json:"usd_amount,omitempty"`
}

type ProjectInSearchPriceWithoutDiscount struct {
	Amount    *float32 `json:"amount,omitempty"`
	Currency  *string  `json:"currency,omitempty"`
	UsdAmount *float32 `json:"usd_amount,omitempty"`
}

type ProjectInSearch struct {
	AverageScores          map[string]float32                   `json:"average_scores,omitempty"`
	BudgetCode             *string                              `json:"budget_code,omitempty"`
	CallbackURL            *string                              `json:"callback_url,omitempty"`
	Client                 *User                                `json:"client,omitempty"`
	CompletedOn            *time.Time                           `json:"completed_on,omitempty"`
	ContinuousProjectType  *string                              `json:"continuous_project_type,omitempty"`
	CreatedAt              *int64                               `json:"created_at,omitempty"`
	Custom                 map[string]interface{}               `json:"custom,omitempty"`
	DeliveryAt             *int64                               `json:"delivery_at,omitempty"`
	Errors                 []Error                              `json:"errors,omitempty"`
	ID                     *int64                               `json:"id,omitempty"`
	IsAPIProject           *bool                                `json:"is_api_project,omitempty"`
	IsCertified            *bool                                `json:"is_certified,omitempty"`
	IsContinuous           *bool                                `json:"is_continuous,omitempty"`
	IsManual               *bool                                `json:"is_manual,omitempty"`
	Links                  *ProjectLinks                        `json:"links,omitempty"`
	Pairs                  []VendorProjectPair                  `json:"pairs,omitempty"`
	Price                  *ProjectInSearchPrice                `json:"price,omitempty"`
	PriceWithoutDiscount   *ProjectInSearchPriceWithoutDiscount `json:"price_without_discount,omitempty"`
	Role                   *VendorProjectRoleEnum               `json:"role,omitempty"`
	SearchResultReason     *string                              `json:"search_result_reason,omitempty"`
	ShouldSendClientSurvey *bool                                `json:"should_send_client_survey,omitempty"`
	Source                 *ProjectSourceEnum                   `json:"source,omitempty"`
	SourceLanguage         *string                              `json:"source_language,omitempty"`
	Status                 *ProjectStatusEnum                   `json:"status,omitempty"`
	Subjects               []string                             `json:"subjects,omitempty"`
	TargetLanguages        []string                             `json:"target_languages,omitempty"`
	TmsName                *string                              `json:"tms_name,omitempty"`
	ValidUntil             *int64                               `json:"valid_until,omitempty"`
	VendorWordCount        *int64                               `json:"vendor_word_count,omitempty"`
	WordCount              *int64                               `json:"word_count,omitempty"`
}
