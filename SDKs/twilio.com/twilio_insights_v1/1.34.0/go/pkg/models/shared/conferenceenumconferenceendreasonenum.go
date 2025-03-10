package shared

type ConferenceEnumConferenceEndReasonEnum string

const (
	ConferenceEnumConferenceEndReasonEnumLastParticipantLeft                      ConferenceEnumConferenceEndReasonEnum = "last_participant_left"
	ConferenceEnumConferenceEndReasonEnumConferenceEndedViaAPI                    ConferenceEnumConferenceEndReasonEnum = "conference_ended_via_api"
	ConferenceEnumConferenceEndReasonEnumParticipantWithEndConferenceOnExitLeft   ConferenceEnumConferenceEndReasonEnum = "participant_with_end_conference_on_exit_left"
	ConferenceEnumConferenceEndReasonEnumLastParticipantKicked                    ConferenceEnumConferenceEndReasonEnum = "last_participant_kicked"
	ConferenceEnumConferenceEndReasonEnumParticipantWithEndConferenceOnExitKicked ConferenceEnumConferenceEndReasonEnum = "participant_with_end_conference_on_exit_kicked"
)
