<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Reason for the rollback */
enum CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum: string
{
    case BROKE_OLD_FEATURES = 'broke old features';
    case OTHER = 'other';
    case PERFORMANCE = 'performance';
    case STABILITY = 'stability';
    case TESTING = 'testing';
    case UNIFYING_NETWORKS_VERSIONS = 'unifying networks versions';
}
