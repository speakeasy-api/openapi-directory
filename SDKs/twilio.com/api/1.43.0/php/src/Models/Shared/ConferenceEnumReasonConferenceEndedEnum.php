<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum ConferenceEnumReasonConferenceEndedEnum: string
{
    case CONFERENCE_ENDED_VIA_API = 'conference-ended-via-api';
    case PARTICIPANT_WITH_END_CONFERENCE_ON_EXIT_LEFT = 'participant-with-end-conference-on-exit-left';
    case PARTICIPANT_WITH_END_CONFERENCE_ON_EXIT_KICKED = 'participant-with-end-conference-on-exit-kicked';
    case LAST_PARTICIPANT_KICKED = 'last-participant-kicked';
    case LAST_PARTICIPANT_LEFT = 'last-participant-left';
}
