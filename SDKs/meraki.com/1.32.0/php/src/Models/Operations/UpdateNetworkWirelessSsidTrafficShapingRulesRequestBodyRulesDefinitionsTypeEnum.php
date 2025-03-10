<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'. */
enum UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum: string
{
    case APPLICATION = 'application';
    case APPLICATION_CATEGORY = 'applicationCategory';
    case HOST = 'host';
    case IP_RANGE = 'ipRange';
    case LOCAL_NET = 'localNet';
    case PORT = 'port';
}
