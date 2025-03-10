<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
enum UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum: string
{
    case NON_UNIQUE = 'Non-unique';
    case UNIQUE = 'Unique';
}
