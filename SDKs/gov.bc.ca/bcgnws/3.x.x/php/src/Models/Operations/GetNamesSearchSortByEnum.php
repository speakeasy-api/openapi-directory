<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint. */
enum GetNamesSearchSortByEnum: string
{
    case RELEVANCE = 'relevance';
    case NAME = 'name';
    case FEATURE_TYPE = 'featureType';
    case DECISION_DATE = 'decisionDate';
}
