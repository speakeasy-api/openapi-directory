<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`. */
enum DimensionFilterClauseOperatorEnum: string
{
    case OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED';
    case OR = 'OR';
    case AND = 'AND';
}
