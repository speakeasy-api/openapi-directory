<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. */
enum ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum: string
{
    case NOT_LINKED_IMAGE = 'NOT_LINKED_IMAGE';
    case LINKED = 'LINKED';
}
