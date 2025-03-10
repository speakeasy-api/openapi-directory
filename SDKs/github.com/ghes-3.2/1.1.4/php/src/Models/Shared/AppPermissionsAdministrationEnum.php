<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. */
enum AppPermissionsAdministrationEnum: string
{
    case READ = 'read';
    case WRITE = 'write';
}
