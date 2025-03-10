<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The legal reason for the current status of the subscription. */
enum PublicSubscriptionStatusLegalBasisEnum: string
{
    case LEGITIMATE_INTEREST_PQL = 'LEGITIMATE_INTEREST_PQL';
    case LEGITIMATE_INTEREST_CLIENT = 'LEGITIMATE_INTEREST_CLIENT';
    case PERFORMANCE_OF_CONTRACT = 'PERFORMANCE_OF_CONTRACT';
    case CONSENT_WITH_NOTICE = 'CONSENT_WITH_NOTICE';
    case NON_GDPR = 'NON_GDPR';
    case PROCESS_AND_STORE = 'PROCESS_AND_STORE';
    case LEGITIMATE_INTEREST_OTHER = 'LEGITIMATE_INTEREST_OTHER';
}
