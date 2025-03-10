<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The direction in which this rule applies. */
enum FirewallPolicyRuleDirectionEnum: string
{
    case EGRESS = 'EGRESS';
    case INGRESS = 'INGRESS';
}
