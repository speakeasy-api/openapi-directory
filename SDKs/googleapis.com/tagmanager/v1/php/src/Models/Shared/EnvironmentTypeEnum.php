<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The type of this environment. */
enum EnvironmentTypeEnum: string
{
    case USER = 'user';
    case LIVE = 'live';
    case LATEST = 'latest';
    case DRAFT = 'draft';
}
