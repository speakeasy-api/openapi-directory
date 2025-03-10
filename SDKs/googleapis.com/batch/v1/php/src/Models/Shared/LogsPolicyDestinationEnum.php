<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Where logs should be saved. */
enum LogsPolicyDestinationEnum: string
{
    case DESTINATION_UNSPECIFIED = 'DESTINATION_UNSPECIFIED';
    case CLOUD_LOGGING = 'CLOUD_LOGGING';
    case PATH = 'PATH';
}
