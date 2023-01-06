package shared

type CisInstructionCisInstructionPayFrequencyEnum string

const (
	CisInstructionCisInstructionPayFrequencyEnumMonthly CisInstructionCisInstructionPayFrequencyEnum = "Monthly"
	CisInstructionCisInstructionPayFrequencyEnumWeekly  CisInstructionCisInstructionPayFrequencyEnum = "Weekly"
)

type CisInstructionCisInstructionUomEnum string

const (
	CisInstructionCisInstructionUOMEnumNotSet CisInstructionCisInstructionUomEnum = "NotSet"
	CisInstructionCisInstructionUOMEnumMinute CisInstructionCisInstructionUomEnum = "Minute"
	CisInstructionCisInstructionUOMEnumHour   CisInstructionCisInstructionUomEnum = "Hour"
	CisInstructionCisInstructionUOMEnumDay    CisInstructionCisInstructionUomEnum = "Day"
	CisInstructionCisInstructionUOMEnumWeek   CisInstructionCisInstructionUomEnum = "Week"
	CisInstructionCisInstructionUOMEnumMonth  CisInstructionCisInstructionUomEnum = "Month"
	CisInstructionCisInstructionUOMEnumYear   CisInstructionCisInstructionUomEnum = "Year"
	CisInstructionCisInstructionUOMEnumUnit   CisInstructionCisInstructionUomEnum = "Unit"
)

type CisInstructionCisInstruction struct {
	CisLineTag   *string                                       `json:"CisLineTag,omitempty"`
	CisLineType  *string                                       `json:"CisLineType,omitempty"`
	Description  *string                                       `json:"Description,omitempty"`
	PayFrequency *CisInstructionCisInstructionPayFrequencyEnum `json:"PayFrequency,omitempty"`
	PeriodEnd    *int32                                        `json:"PeriodEnd,omitempty"`
	PeriodStart  *int32                                        `json:"PeriodStart,omitempty"`
	TaxYearEnd   *int32                                        `json:"TaxYearEnd,omitempty"`
	TaxYearStart *int32                                        `json:"TaxYearStart,omitempty"`
	UOM          *CisInstructionCisInstructionUomEnum          `json:"UOM,omitempty"`
	Units        *float64                                      `json:"Units,omitempty"`
	VAT          *float64                                      `json:"VAT,omitempty"`
	Value        *float64                                      `json:"Value,omitempty"`
}

type CisInstruction struct {
	CisInstruction *CisInstructionCisInstruction `json:"CisInstruction,omitempty"`
}
