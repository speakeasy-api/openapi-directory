<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`. */
enum AppPermissionsDeploymentsEnum: string
{
    case READ = 'read';
    case WRITE = 'write';
}
