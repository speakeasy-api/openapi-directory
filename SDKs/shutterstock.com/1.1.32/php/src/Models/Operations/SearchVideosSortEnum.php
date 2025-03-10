<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Sort by one of these categories */
enum SearchVideosSortEnum: string
{
    case NEWEST = 'newest';
    case POPULAR = 'popular';
    case RELEVANCE = 'relevance';
    case RANDOM = 'random';
}
