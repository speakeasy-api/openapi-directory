<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Looker specific column type of this column. */
enum GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum: string
{
    case LOOKER_COLUMN_TYPE_UNSPECIFIED = 'LOOKER_COLUMN_TYPE_UNSPECIFIED';
    case DIMENSION = 'DIMENSION';
    case DIMENSION_GROUP = 'DIMENSION_GROUP';
    case FILTER = 'FILTER';
    case MEASURE = 'MEASURE';
    case PARAMETER = 'PARAMETER';
}
