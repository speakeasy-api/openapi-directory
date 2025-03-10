<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed. */
enum GoogleCloudDataplexV1StorageFormatCompressionFormatEnum: string
{
    case COMPRESSION_FORMAT_UNSPECIFIED = 'COMPRESSION_FORMAT_UNSPECIFIED';
    case GZIP = 'GZIP';
    case BZIP2 = 'BZIP2';
}
