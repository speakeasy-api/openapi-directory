<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Required. The user role to assign to a user for the entity. */
enum AssignedUserRoleUserRoleEnum: string
{
    case USER_ROLE_UNSPECIFIED = 'USER_ROLE_UNSPECIFIED';
    case ADMIN = 'ADMIN';
    case ADMIN_PARTNER_CLIENT = 'ADMIN_PARTNER_CLIENT';
    case STANDARD = 'STANDARD';
    case STANDARD_PLANNER = 'STANDARD_PLANNER';
    case STANDARD_PLANNER_LIMITED = 'STANDARD_PLANNER_LIMITED';
    case STANDARD_PARTNER_CLIENT = 'STANDARD_PARTNER_CLIENT';
    case READ_ONLY = 'READ_ONLY';
    case REPORTING_ONLY = 'REPORTING_ONLY';
    case LIMITED_REPORTING_ONLY = 'LIMITED_REPORTING_ONLY';
    case CREATIVE = 'CREATIVE';
    case CREATIVE_ADMIN = 'CREATIVE_ADMIN';
}
