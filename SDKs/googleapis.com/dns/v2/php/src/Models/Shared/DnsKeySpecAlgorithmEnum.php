<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** String mnemonic specifying the DNSSEC algorithm of this key. */
enum DnsKeySpecAlgorithmEnum: string
{
    case RSASHA1 = 'RSASHA1';
    case RSASHA256 = 'RSASHA256';
    case RSASHA512 = 'RSASHA512';
    case ECDSAP256_SHA256 = 'ECDSAP256SHA256';
    case ECDSAP384_SHA384 = 'ECDSAP384SHA384';
}
