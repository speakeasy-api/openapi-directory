<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Output only. Current state of the report. */
enum UtilizationReportStateEnum: string
{
    case STATE_UNSPECIFIED = 'STATE_UNSPECIFIED';
    case CREATING = 'CREATING';
    case SUCCEEDED = 'SUCCEEDED';
    case FAILED = 'FAILED';
}
