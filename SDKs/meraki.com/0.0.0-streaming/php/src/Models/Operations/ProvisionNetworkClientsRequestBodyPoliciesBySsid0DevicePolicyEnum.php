<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required. */
enum ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum: string
{
    case BLOCKED = 'Blocked';
    case GROUP_POLICY = 'Group policy';
    case NORMAL = 'Normal';
    case WHITELISTED = 'Whitelisted';
}
