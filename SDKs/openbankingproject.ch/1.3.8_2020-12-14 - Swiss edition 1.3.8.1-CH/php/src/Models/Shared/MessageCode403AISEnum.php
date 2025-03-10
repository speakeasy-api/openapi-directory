<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Message codes defined for AIS for HTTP Error code 403 (FORBIDDEN). */
enum MessageCode403AISEnum: string
{
    case CONSENT_UNKNOWN = 'CONSENT_UNKNOWN';
    case SERVICE_BLOCKED = 'SERVICE_BLOCKED';
    case RESOURCE_UNKNOWN = 'RESOURCE_UNKNOWN';
    case RESOURCE_EXPIRED = 'RESOURCE_EXPIRED';
}
