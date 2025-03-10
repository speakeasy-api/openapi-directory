<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The status of the Card Profile. */
enum CardProfileStatusEnum: string
{
    case PENDING = 'pending';
    case REJECTED = 'rejected';
    case ACTIVE = 'active';
    case ARCHIVED = 'archived';
}
