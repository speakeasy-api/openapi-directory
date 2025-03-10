<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The type of SNMP access. Can be one of 'none' (disabled), 'community' (V1/V2c), or 'users' (V3). */
enum UpdateNetworkSnmpRequestBodyAccessEnum: string
{
    case COMMUNITY = 'community';
    case NONE = 'none';
    case USERS = 'users';
}
