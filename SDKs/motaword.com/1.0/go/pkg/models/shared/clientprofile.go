package shared

import (
	"time"
)

// ClientProfileNpsAverage
// information for all nps survey that this client completed
type ClientProfileNpsAverage struct {
	CompletedSurveysCount *float64 `json:"completed_surveys_count,omitempty"`
	Score                 *float32 `json:"score,omitempty"`
}

// ClientProfileNpsLast
// last survey info
type ClientProfileNpsLast struct {
	CompletionDate *time.Time `json:"completion_date,omitempty"`
	Score          *float64   `json:"score,omitempty"`
}

// ClientProfileNps
// net promoter score info for this client
type ClientProfileNps struct {
	Average *ClientProfileNpsAverage `json:"average,omitempty"`
	Last    *ClientProfileNpsLast    `json:"last,omitempty"`
}

type ClientProfile struct {
	AccountCreationDate    *time.Time                `json:"account_creation_date,omitempty"`
	ClientProjectCount     *float64                  `json:"client_project_count,omitempty"`
	Corporate              *string                   `json:"corporate,omitempty"`
	CorporateID            *float64                  `json:"corporate_id,omitempty"`
	CorporateUserCount     *float64                  `json:"corporate_user_count,omitempty"`
	FrequentFileExtension  *string                   `json:"frequent_file_extension,omitempty"`
	FrequentLanguagePairs  []string                  `json:"frequent_language_pairs,omitempty"`
	FullName               *string                   `json:"full_name,omitempty"`
	Growth                 *bool                     `json:"growth,omitempty"`
	IsComplex              *bool                     `json:"is_complex,omitempty"`
	Last12MonthsSpending   *float32                  `json:"last_12_months_spending,omitempty"`
	LastProject            *float64                  `json:"last_project,omitempty"`
	LastProjectTime        *time.Time                `json:"last_project_time,omitempty"`
	LastProofreaders       []ProofreaderWithLanguage `json:"last_proofreaders,omitempty"`
	Notes                  []string                  `json:"notes,omitempty"`
	Nps                    *ClientProfileNps         `json:"nps,omitempty"`
	UserRankInProjectCount *float64                  `json:"user_rank_in_project_count,omitempty"`
	UserRankInSpending     *float64                  `json:"user_rank_in_spending,omitempty"`
}
