<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum FinalReportLinksMessagesStatusEnum: string
{
    case SUBMITTED = 'submitted';
    case DELIVERED = 'delivered';
    case READ = 'read';
    case REJECTED = 'rejected';
    case UNDELIVERABLE = 'undeliverable';
}
