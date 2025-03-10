<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** type represent whether the execution executed directly by user or scheduled according evaluation.schedule field. */
enum ExecutionRunTypeEnum: string
{
    case TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED';
    case ONE_TIME = 'ONE_TIME';
    case SCHEDULED = 'SCHEDULED';
}
