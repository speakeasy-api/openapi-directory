<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Type of the object of this dynamic targeting key. This is a required field. */
enum DfareportingDynamicTargetingKeysDeleteObjectTypeEnum: string
{
    case OBJECT_ADVERTISER = 'OBJECT_ADVERTISER';
    case OBJECT_AD = 'OBJECT_AD';
    case OBJECT_CREATIVE = 'OBJECT_CREATIVE';
    case OBJECT_PLACEMENT = 'OBJECT_PLACEMENT';
}
