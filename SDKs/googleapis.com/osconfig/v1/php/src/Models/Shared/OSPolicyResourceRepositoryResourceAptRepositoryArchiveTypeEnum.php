<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Required. Type of archive files in this repository. */
enum OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum: string
{
    case ARCHIVE_TYPE_UNSPECIFIED = 'ARCHIVE_TYPE_UNSPECIFIED';
    case DEB = 'DEB';
    case DEB_SRC = 'DEB_SRC';
}
