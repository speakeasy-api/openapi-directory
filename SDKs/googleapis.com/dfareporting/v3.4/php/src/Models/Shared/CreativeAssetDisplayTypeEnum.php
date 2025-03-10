<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
enum CreativeAssetDisplayTypeEnum: string
{
    case ASSET_DISPLAY_TYPE_INPAGE = 'ASSET_DISPLAY_TYPE_INPAGE';
    case ASSET_DISPLAY_TYPE_FLOATING = 'ASSET_DISPLAY_TYPE_FLOATING';
    case ASSET_DISPLAY_TYPE_OVERLAY = 'ASSET_DISPLAY_TYPE_OVERLAY';
    case ASSET_DISPLAY_TYPE_EXPANDING = 'ASSET_DISPLAY_TYPE_EXPANDING';
    case ASSET_DISPLAY_TYPE_FLASH_IN_FLASH = 'ASSET_DISPLAY_TYPE_FLASH_IN_FLASH';
    case ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING = 'ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING';
    case ASSET_DISPLAY_TYPE_PEEL_DOWN = 'ASSET_DISPLAY_TYPE_PEEL_DOWN';
    case ASSET_DISPLAY_TYPE_VPAID_LINEAR = 'ASSET_DISPLAY_TYPE_VPAID_LINEAR';
    case ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR = 'ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR';
    case ASSET_DISPLAY_TYPE_BACKDROP = 'ASSET_DISPLAY_TYPE_BACKDROP';
}
