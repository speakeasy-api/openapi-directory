<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
enum Cvssv3AvailabilityImpactEnum: string
{
    case IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED';
    case IMPACT_HIGH = 'IMPACT_HIGH';
    case IMPACT_LOW = 'IMPACT_LOW';
    case IMPACT_NONE = 'IMPACT_NONE';
}
