<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation. */
enum IssuesListForOrgFilterEnum: string
{
    case ASSIGNED = 'assigned';
    case CREATED = 'created';
    case MENTIONED = 'mentioned';
    case SUBSCRIBED = 'subscribed';
    case REPOS = 'repos';
    case ALL = 'all';
}
