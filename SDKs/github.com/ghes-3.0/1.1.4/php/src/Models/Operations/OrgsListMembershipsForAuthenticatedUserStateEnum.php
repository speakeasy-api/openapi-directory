<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships. */
enum OrgsListMembershipsForAuthenticatedUserStateEnum: string
{
    case ACTIVE = 'active';
    case PENDING = 'pending';
}
