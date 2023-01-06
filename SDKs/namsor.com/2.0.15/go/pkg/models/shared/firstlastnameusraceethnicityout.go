package shared

type FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum string

const (
	FirstLastNameUSRaceEthnicityOutRaceEthnicityEnumWNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "W_NL"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityEnumHl   FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "HL"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityEnumA    FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "A"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityEnumBNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "B_NL"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityEnumAiAn FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "AI_AN"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityEnumPi   FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "PI"
)

type FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum string

const (
	FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnumWNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "W_NL"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnumHl   FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "HL"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnumA    FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "A"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnumBNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "B_NL"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnumAiAn FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "AI_AN"
	FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnumPi   FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "PI"
)

// FirstLastNameUsRaceEthnicityOut
// Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
type FirstLastNameUsRaceEthnicityOut struct {
	FirstName                *string                                              `json:"firstName,omitempty"`
	ID                       *string                                              `json:"id,omitempty"`
	LastName                 *string                                              `json:"lastName,omitempty"`
	ProbabilityAltCalibrated *float64                                             `json:"probabilityAltCalibrated,omitempty"`
	ProbabilityCalibrated    *float64                                             `json:"probabilityCalibrated,omitempty"`
	RaceEthnicitiesTop       []string                                             `json:"raceEthnicitiesTop,omitempty"`
	RaceEthnicity            *FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum    `json:"raceEthnicity,omitempty"`
	RaceEthnicityAlt         *FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum `json:"raceEthnicityAlt,omitempty"`
	Score                    *float64                                             `json:"score,omitempty"`
	Script                   *string                                              `json:"script,omitempty"`
}
