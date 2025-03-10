<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The type of correction that was applied to the creative. */
enum CorrectionTypeEnum: string
{
    case CORRECTION_TYPE_UNSPECIFIED = 'CORRECTION_TYPE_UNSPECIFIED';
    case VENDOR_IDS_ADDED = 'VENDOR_IDS_ADDED';
    case SSL_ATTRIBUTE_REMOVED = 'SSL_ATTRIBUTE_REMOVED';
    case FLASH_FREE_ATTRIBUTE_REMOVED = 'FLASH_FREE_ATTRIBUTE_REMOVED';
    case FLASH_FREE_ATTRIBUTE_ADDED = 'FLASH_FREE_ATTRIBUTE_ADDED';
    case REQUIRED_ATTRIBUTE_ADDED = 'REQUIRED_ATTRIBUTE_ADDED';
    case REQUIRED_VENDOR_ADDED = 'REQUIRED_VENDOR_ADDED';
    case SSL_ATTRIBUTE_ADDED = 'SSL_ATTRIBUTE_ADDED';
    case IN_BANNER_VIDEO_ATTRIBUTE_ADDED = 'IN_BANNER_VIDEO_ATTRIBUTE_ADDED';
    case MRAID_ATTRIBUTE_ADDED = 'MRAID_ATTRIBUTE_ADDED';
    case FLASH_ATTRIBUTE_REMOVED = 'FLASH_ATTRIBUTE_REMOVED';
    case VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED = 'VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED';
}
