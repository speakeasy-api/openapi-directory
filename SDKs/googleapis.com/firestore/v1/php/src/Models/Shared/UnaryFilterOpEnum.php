<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The unary operator to apply. */
enum UnaryFilterOpEnum: string
{
    case OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED';
    case IS_NAN = 'IS_NAN';
    case IS_NULL = 'IS_NULL';
    case IS_NOT_NAN = 'IS_NOT_NAN';
    case IS_NOT_NULL = 'IS_NOT_NULL';
}
