<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The high-level, machine-readable status of this Feature. */
enum FeatureStateCodeEnum: string
{
    case CODE_UNSPECIFIED = 'CODE_UNSPECIFIED';
    case OK = 'OK';
    case WARNING = 'WARNING';
    case ERROR = 'ERROR';
}
