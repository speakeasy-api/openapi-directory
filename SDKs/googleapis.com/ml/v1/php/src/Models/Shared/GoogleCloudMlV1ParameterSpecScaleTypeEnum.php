<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`). */
enum GoogleCloudMlV1ParameterSpecScaleTypeEnum: string
{
    case NONE = 'NONE';
    case UNIT_LINEAR_SCALE = 'UNIT_LINEAR_SCALE';
    case UNIT_LOG_SCALE = 'UNIT_LOG_SCALE';
    case UNIT_REVERSE_LOG_SCALE = 'UNIT_REVERSE_LOG_SCALE';
}
