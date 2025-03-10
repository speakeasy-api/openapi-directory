<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The type of the compute resource. */
enum GetVmwareRecoveryNetworksComputeResourceTypeEnum: string
{
    case COMPUTE_CLUSTER = 'ComputeCluster';
    case HOST = 'Host';
    case RESOURCE_POOL = 'ResourcePool';
}
