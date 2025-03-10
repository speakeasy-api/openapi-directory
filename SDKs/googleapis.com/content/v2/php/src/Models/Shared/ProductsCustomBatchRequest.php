<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ProductsCustomBatchRequest
{
    /**
     * The request entries to be processed in the batch.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ProductsCustomBatchRequestEntry> $entries
     */
	#[\JMS\Serializer\Annotation\SerializedName('entries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ProductsCustomBatchRequestEntry>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $entries = null;
    
	public function __construct()
	{
		$this->entries = null;
	}
}
