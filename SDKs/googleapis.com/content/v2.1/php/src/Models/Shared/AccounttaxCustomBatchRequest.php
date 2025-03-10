<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AccounttaxCustomBatchRequest
{
    /**
     * The request entries to be processed in the batch.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AccounttaxCustomBatchRequestEntry> $entries
     */
	#[\JMS\Serializer\Annotation\SerializedName('entries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AccounttaxCustomBatchRequestEntry>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $entries = null;
    
	public function __construct()
	{
		$this->entries = null;
	}
}
