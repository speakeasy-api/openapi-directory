<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Band selection can be set to either 'ssid' or 'ap'. */
enum UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum: string
{
    case AP = 'ap';
    case SSID = 'ssid';
}
