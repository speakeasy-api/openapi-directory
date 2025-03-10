<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Mode of a search. Defaults to SearchMode.JOB_SEARCH. */
enum SearchJobsRequestSearchModeEnum: string
{
    case SEARCH_MODE_UNSPECIFIED = 'SEARCH_MODE_UNSPECIFIED';
    case JOB_SEARCH = 'JOB_SEARCH';
    case FEATURED_JOB_SEARCH = 'FEATURED_JOB_SEARCH';
}
