<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The possible package contents values */
enum UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum: string
{
    case MERCHANDISE = 'merchandise';
    case DOCUMENTS = 'documents';
    case GIFT = 'gift';
    case RETURNED_GOODS = 'returned_goods';
    case SAMPLE = 'sample';
}
