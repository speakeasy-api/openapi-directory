<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** What should happen to the disk after the workstation is deleted. Defaults to DELETE. */
enum GceRegionalPersistentDiskReclaimPolicyEnum: string
{
    case RECLAIM_POLICY_UNSPECIFIED = 'RECLAIM_POLICY_UNSPECIFIED';
    case DELETE = 'DELETE';
    case RETAIN = 'RETAIN';
}
