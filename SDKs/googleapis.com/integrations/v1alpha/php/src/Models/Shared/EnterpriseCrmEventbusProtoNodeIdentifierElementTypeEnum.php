<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Destination node where the edge ends. It can only be a task config. */
enum EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum: string
{
    case UNKNOWN_TYPE = 'UNKNOWN_TYPE';
    case TASK_CONFIG = 'TASK_CONFIG';
    case TRIGGER_CONFIG = 'TRIGGER_CONFIG';
}
