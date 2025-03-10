<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * The direction of the flow of transfer funds.
 * 
 * 
 * `PAYMENT`: Transfers funds from an end user's account to your business account.
 * 
 * `DISBURSEMENT`: Transfers funds from your business account to an end user's account.
 */
enum TransferIntentCreateModeEnum: string
{
    case PAYMENT = 'PAYMENT';
    case DISBURSEMENT = 'DISBURSEMENT';
}
