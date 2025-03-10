<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER. */
enum Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum: string
{
    case FILTER_SYNTAX_UNSPECIFIED = 'FILTER_SYNTAX_UNSPECIFIED';
    case PQL = 'PQL';
    case LIST_FILTER = 'LIST_FILTER';
}
