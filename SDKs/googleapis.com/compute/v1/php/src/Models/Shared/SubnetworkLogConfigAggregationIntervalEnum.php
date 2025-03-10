<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Can only be specified if VPC flow logging for this subnetwork is enabled. Toggles the aggregation interval for collecting flow logs. Increasing the interval time will reduce the amount of generated flow logs for long lasting connections. Default is an interval of 5 seconds per connection. */
enum SubnetworkLogConfigAggregationIntervalEnum: string
{
    case INTERVAL10_MIN = 'INTERVAL_10_MIN';
    case INTERVAL15_MIN = 'INTERVAL_15_MIN';
    case INTERVAL1_MIN = 'INTERVAL_1_MIN';
    case INTERVAL30_SEC = 'INTERVAL_30_SEC';
    case INTERVAL5_MIN = 'INTERVAL_5_MIN';
    case INTERVAL5_SEC = 'INTERVAL_5_SEC';
}
