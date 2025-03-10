<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Optional. Determines how intents are detected from user queries. */
enum GoogleCloudDialogflowV2beta1AgentMatchModeEnum: string
{
    case MATCH_MODE_UNSPECIFIED = 'MATCH_MODE_UNSPECIFIED';
    case MATCH_MODE_HYBRID = 'MATCH_MODE_HYBRID';
    case MATCH_MODE_ML_ONLY = 'MATCH_MODE_ML_ONLY';
}
