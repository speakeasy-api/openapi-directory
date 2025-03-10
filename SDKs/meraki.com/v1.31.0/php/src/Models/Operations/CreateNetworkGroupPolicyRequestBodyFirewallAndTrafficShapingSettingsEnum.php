<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'. */
enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum: string
{
    case CUSTOM = 'custom';
    case IGNORE = 'ignore';
    case NETWORK_DEFAULT = 'network default';
}
