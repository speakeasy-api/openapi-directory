<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The type of function. This determines when the function will be called. */
enum DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum: string
{
    case PRE_ACTION_EXECUTION = 'PRE_ACTION_EXECUTION';
    case PRE_FETCH_OPTIONS = 'PRE_FETCH_OPTIONS';
    case POST_FETCH_OPTIONS = 'POST_FETCH_OPTIONS';
}
