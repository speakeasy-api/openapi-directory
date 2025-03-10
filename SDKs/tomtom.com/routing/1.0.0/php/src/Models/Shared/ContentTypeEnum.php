<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters. */
enum ContentTypeEnum: string
{
    case XML = 'xml';
    case JSON = 'json';
    case JSONP = 'jsonp';
}
