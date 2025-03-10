<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The type of trust represented by the trust resource. */
enum TrustTrustTypeEnum: string
{
    case TRUST_TYPE_UNSPECIFIED = 'TRUST_TYPE_UNSPECIFIED';
    case FOREST = 'FOREST';
    case EXTERNAL = 'EXTERNAL';
}
