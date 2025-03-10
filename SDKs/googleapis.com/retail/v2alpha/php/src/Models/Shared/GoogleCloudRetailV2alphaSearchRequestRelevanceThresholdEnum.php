<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The relevance threshold of the search results. Defaults to RelevanceThreshold.HIGH, which means only the most relevant results are shown, and the least number of results are returned. For more information, see [Adjust result size](https://cloud.google.com/retail/docs/result-size#relevance_thresholding). */
enum GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum: string
{
    case RELEVANCE_THRESHOLD_UNSPECIFIED = 'RELEVANCE_THRESHOLD_UNSPECIFIED';
    case HIGH = 'HIGH';
    case MEDIUM = 'MEDIUM';
    case LOW = 'LOW';
    case LOWEST = 'LOWEST';
}
