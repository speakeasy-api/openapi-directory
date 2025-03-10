<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Placement cap cost option. */
enum PricingScheduleCapCostOptionEnum: string
{
    case CAP_COST_NONE = 'CAP_COST_NONE';
    case CAP_COST_MONTHLY = 'CAP_COST_MONTHLY';
    case CAP_COST_CUMULATIVE = 'CAP_COST_CUMULATIVE';
}
