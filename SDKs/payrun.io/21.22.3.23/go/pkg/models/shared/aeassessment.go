package shared

import (
	"time"
)

type AeAssessmentAeAssessmentAssessmentCodeEnum string

const (
	AEAssessmentAEAssessmentAssessmentCodeEnumExcluded             AeAssessmentAeAssessmentAssessmentCodeEnum = "Excluded"
	AEAssessmentAEAssessmentAssessmentCodeEnumEligibleJobHolder    AeAssessmentAeAssessmentAssessmentCodeEnum = "EligibleJobHolder"
	AEAssessmentAEAssessmentAssessmentCodeEnumNonEligibleJobHolder AeAssessmentAeAssessmentAssessmentCodeEnum = "NonEligibleJobHolder"
	AEAssessmentAEAssessmentAssessmentCodeEnumEntitledWorker       AeAssessmentAeAssessmentAssessmentCodeEnum = "EntitledWorker"
)

type AeAssessmentAeAssessmentAssessmentEventEnum string

const (
	AEAssessmentAEAssessmentAssessmentEventEnumNonEnrolmentEvent    AeAssessmentAeAssessmentAssessmentEventEnum = "NonEnrolmentEvent"
	AEAssessmentAEAssessmentAssessmentEventEnumAutomaticEnrolment   AeAssessmentAeAssessmentAssessmentEventEnum = "AutomaticEnrolment"
	AEAssessmentAEAssessmentAssessmentEventEnumOptIn                AeAssessmentAeAssessmentAssessmentEventEnum = "OptIn"
	AEAssessmentAEAssessmentAssessmentEventEnumVoluntaryJoiner      AeAssessmentAeAssessmentAssessmentEventEnum = "VoluntaryJoiner"
	AEAssessmentAEAssessmentAssessmentEventEnumContractualEnrolment AeAssessmentAeAssessmentAssessmentEventEnum = "ContractualEnrolment"
)

type AeAssessmentAeAssessmentAssessmentOverrideEnum string

const (
	AEAssessmentAEAssessmentAssessmentOverrideEnumNone               AeAssessmentAeAssessmentAssessmentOverrideEnum = "None"
	AEAssessmentAEAssessmentAssessmentOverrideEnumOptOut             AeAssessmentAeAssessmentAssessmentOverrideEnum = "OptOut"
	AEAssessmentAEAssessmentAssessmentOverrideEnumOptIn              AeAssessmentAeAssessmentAssessmentOverrideEnum = "OptIn"
	AEAssessmentAEAssessmentAssessmentOverrideEnumVoluntaryJoiner    AeAssessmentAeAssessmentAssessmentOverrideEnum = "VoluntaryJoiner"
	AEAssessmentAEAssessmentAssessmentOverrideEnumContractualPension AeAssessmentAeAssessmentAssessmentOverrideEnum = "ContractualPension"
	AEAssessmentAEAssessmentAssessmentOverrideEnumCeasedMembership   AeAssessmentAeAssessmentAssessmentOverrideEnum = "CeasedMembership"
	AEAssessmentAEAssessmentAssessmentOverrideEnumLeaver             AeAssessmentAeAssessmentAssessmentOverrideEnum = "Leaver"
	AEAssessmentAEAssessmentAssessmentOverrideEnumExcluded           AeAssessmentAeAssessmentAssessmentOverrideEnum = "Excluded"
)

type AeAssessmentAeAssessmentAssessmentResultEnum string

const (
	AEAssessmentAEAssessmentAssessmentResultEnumInconclusive AeAssessmentAeAssessmentAssessmentResultEnum = "Inconclusive"
	AEAssessmentAEAssessmentAssessmentResultEnumNoChange     AeAssessmentAeAssessmentAssessmentResultEnum = "NoChange"
	AEAssessmentAEAssessmentAssessmentResultEnumEnrol        AeAssessmentAeAssessmentAssessmentResultEnum = "Enrol"
	AEAssessmentAEAssessmentAssessmentResultEnumExit         AeAssessmentAeAssessmentAssessmentResultEnum = "Exit"
)

type AeAssessmentAeAssessment struct {
	Age                                *int32                                          `json:"Age,omitempty"`
	AssessmentCode                     *AeAssessmentAeAssessmentAssessmentCodeEnum     `json:"AssessmentCode,omitempty"`
	AssessmentDate                     *time.Time                                      `json:"AssessmentDate,omitempty"`
	AssessmentEvent                    *AeAssessmentAeAssessmentAssessmentEventEnum    `json:"AssessmentEvent,omitempty"`
	AssessmentOverride                 *AeAssessmentAeAssessmentAssessmentOverrideEnum `json:"AssessmentOverride,omitempty"`
	AssessmentResult                   *AeAssessmentAeAssessmentAssessmentResultEnum   `json:"AssessmentResult,omitempty"`
	IsMemberOfAlternativePensionScheme *bool                                           `json:"IsMemberOfAlternativePensionScheme,omitempty"`
	OptOutWindowEndDate                *time.Time                                      `json:"OptOutWindowEndDate,omitempty"`
	QualifyingEarnings                 *float64                                        `json:"QualifyingEarnings,omitempty"`
	ReenrolmentDate                    *time.Time                                      `json:"ReenrolmentDate,omitempty"`
	StatePensionAge                    *int32                                          `json:"StatePensionAge,omitempty"`
	StatePensionDate                   *time.Time                                      `json:"StatePensionDate,omitempty"`
	TaxPeriod                          *int32                                          `json:"TaxPeriod,omitempty"`
	TaxYear                            *int32                                          `json:"TaxYear,omitempty"`
}

type AeAssessment struct {
	AEAssessment *AeAssessmentAeAssessment `json:"AEAssessment,omitempty"`
}
