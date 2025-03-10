<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The category of the commitment. Category MACHINE specifies commitments composed of machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE specifies commitments composed of software licenses, listed in licenseResources. Note that only MACHINE commitments should have a Type specified. */
enum CommitmentCategoryEnum: string
{
    case CATEGORY_UNSPECIFIED = 'CATEGORY_UNSPECIFIED';
    case LICENSE = 'LICENSE';
    case MACHINE = 'MACHINE';
}
