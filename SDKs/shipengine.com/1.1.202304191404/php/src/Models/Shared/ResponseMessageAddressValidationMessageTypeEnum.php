<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The different types of messages that can be returned by the address validation API */
enum ResponseMessageAddressValidationMessageTypeEnum: string
{
    case ERROR = 'error';
    case WARNING = 'warning';
    case INFO = 'info';
}
