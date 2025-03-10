<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Output only. Flag to mark the version indicating the launch stage. */
enum ProviderLaunchStageEnum: string
{
    case LAUNCH_STAGE_UNSPECIFIED = 'LAUNCH_STAGE_UNSPECIFIED';
    case PREVIEW = 'PREVIEW';
    case GA = 'GA';
    case DEPRECATED = 'DEPRECATED';
    case PRIVATE_PREVIEW = 'PRIVATE_PREVIEW';
}
