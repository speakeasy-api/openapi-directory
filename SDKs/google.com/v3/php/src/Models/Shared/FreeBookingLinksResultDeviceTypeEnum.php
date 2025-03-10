<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request. */
enum FreeBookingLinksResultDeviceTypeEnum: string
{
    case DEVICE_UNSPECIFIED = 'DEVICE_UNSPECIFIED';
    case DEVICE_UNKNOWN = 'DEVICE_UNKNOWN';
    case DESKTOP = 'DESKTOP';
    case MOBILE = 'MOBILE';
    case TABLET = 'TABLET';
}
