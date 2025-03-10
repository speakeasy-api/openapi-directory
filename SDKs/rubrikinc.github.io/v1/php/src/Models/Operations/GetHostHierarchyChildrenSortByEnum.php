<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Attribute to sort the results on. */
enum GetHostHierarchyChildrenSortByEnum: string
{
    case STATUS = 'Status';
    case NAME = 'Name';
    case EXPORT_POINT = 'ExportPoint';
    case SHARE_TYPE = 'ShareType';
    case HOSTNAME = 'Hostname';
}
