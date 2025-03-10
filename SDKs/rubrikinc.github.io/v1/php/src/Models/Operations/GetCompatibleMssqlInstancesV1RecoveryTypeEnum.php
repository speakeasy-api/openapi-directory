<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Recovery type. */
enum GetCompatibleMssqlInstancesV1RecoveryTypeEnum: string
{
    case MOUNT = 'Mount';
    case EXPORT = 'Export';
    case RESTORE = 'Restore';
}
