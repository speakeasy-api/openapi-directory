package shared

type TransmissionTypes struct {
	ACH        bool `json:"ACH"`
	SAMEDAYACH bool `json:"SAME_DAY_ACH"`
	WIRE       bool `json:"WIRE"`
}
