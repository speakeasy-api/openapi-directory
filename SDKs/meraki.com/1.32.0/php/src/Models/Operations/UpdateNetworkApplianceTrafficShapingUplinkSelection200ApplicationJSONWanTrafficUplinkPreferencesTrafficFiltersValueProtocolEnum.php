<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp6' or 'any' */
enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum: string
{
    case ANY = 'any';
    case ICMP6 = 'icmp6';
    case TCP = 'tcp';
    case UDP = 'udp';
}
