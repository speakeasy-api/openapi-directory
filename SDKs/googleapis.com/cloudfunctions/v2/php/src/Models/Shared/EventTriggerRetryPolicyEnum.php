<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Optional. If unset, then defaults to ignoring failures (i.e. not retrying them). */
enum EventTriggerRetryPolicyEnum: string
{
    case RETRY_POLICY_UNSPECIFIED = 'RETRY_POLICY_UNSPECIFIED';
    case RETRY_POLICY_DO_NOT_RETRY = 'RETRY_POLICY_DO_NOT_RETRY';
    case RETRY_POLICY_RETRY = 'RETRY_POLICY_RETRY';
}
