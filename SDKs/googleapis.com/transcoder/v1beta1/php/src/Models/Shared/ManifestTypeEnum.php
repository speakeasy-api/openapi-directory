<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Required. Type of the manifest, can be "HLS" or "DASH". */
enum ManifestTypeEnum: string
{
    case MANIFEST_TYPE_UNSPECIFIED = 'MANIFEST_TYPE_UNSPECIFIED';
    case HLS = 'HLS';
    case DASH = 'DASH';
}
