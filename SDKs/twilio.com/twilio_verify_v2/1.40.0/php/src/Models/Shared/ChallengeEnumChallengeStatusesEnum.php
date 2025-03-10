<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`. */
enum ChallengeEnumChallengeStatusesEnum: string
{
    case PENDING = 'pending';
    case EXPIRED = 'expired';
    case APPROVED = 'approved';
    case DENIED = 'denied';
}
