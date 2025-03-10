<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". */
enum RealtimebiddingBuyersCreativesListViewEnum: string
{
    case CREATIVE_VIEW_UNSPECIFIED = 'CREATIVE_VIEW_UNSPECIFIED';
    case SERVING_DECISION_ONLY = 'SERVING_DECISION_ONLY';
    case FULL = 'FULL';
}
