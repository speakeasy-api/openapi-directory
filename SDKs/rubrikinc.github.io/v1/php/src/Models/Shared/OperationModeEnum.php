<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The operation mode determines if the API call waits until the operation is completed or returns immediately. The default operation mode is synchronous. */
enum OperationModeEnum: string
{
    case SYNCHRONOUS = 'Synchronous';
    case ASYNCHRONOUS = 'Asynchronous';
}
