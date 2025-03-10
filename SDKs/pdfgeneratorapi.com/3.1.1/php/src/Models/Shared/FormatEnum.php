<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Document format. The zip option will return a ZIP file with PDF files. */
enum FormatEnum: string
{
    case PDF = 'pdf';
    case HTML = 'html';
    case ZIP = 'zip';
    case XLSX = 'xlsx';
}
