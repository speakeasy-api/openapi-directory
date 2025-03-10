<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The role the principal should have. */
enum GoogleAppsDriveLabelsV2LabelPermissionRoleEnum: string
{
    case LABEL_ROLE_UNSPECIFIED = 'LABEL_ROLE_UNSPECIFIED';
    case READER = 'READER';
    case APPLIER = 'APPLIER';
    case ORGANIZER = 'ORGANIZER';
    case EDITOR = 'EDITOR';
}
