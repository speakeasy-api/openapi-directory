<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The level of permission to grant the access token to view and manage users blocked by the organization. */
enum AppPermissionsOrganizationUserBlockingEnum: string
{
    case READ = 'read';
    case WRITE = 'write';
}
