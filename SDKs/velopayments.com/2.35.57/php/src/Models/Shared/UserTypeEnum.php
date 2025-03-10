<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The Type of the User. */
enum UserTypeEnum: string
{
    case BACKOFFICE = 'BACKOFFICE';
    case PAYOR = 'PAYOR';
    case PAYEE = 'PAYEE';
}
