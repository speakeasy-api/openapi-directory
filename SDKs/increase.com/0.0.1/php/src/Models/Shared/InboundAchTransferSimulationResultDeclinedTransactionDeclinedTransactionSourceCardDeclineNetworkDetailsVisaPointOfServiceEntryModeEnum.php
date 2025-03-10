<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The method used to enter the cardholder's primary account number and card expiration date */
enum InboundAchTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum: string
{
    case MANUAL = 'manual';
    case MAGNETIC_STRIPE_NO_CVV = 'magnetic_stripe_no_cvv';
    case OPTICAL_CODE = 'optical_code';
    case INTEGRATED_CIRCUIT_CARD = 'integrated_circuit_card';
    case CONTACTLESS = 'contactless';
    case CREDENTIAL_ON_FILE = 'credential_on_file';
    case MAGNETIC_STRIPE = 'magnetic_stripe';
    case CONTACTLESS_MAGNETIC_STRIPE = 'contactless_magnetic_stripe';
    case INTEGRATED_CIRCUIT_CARD_NO_CVV = 'integrated_circuit_card_no_cvv';
}
