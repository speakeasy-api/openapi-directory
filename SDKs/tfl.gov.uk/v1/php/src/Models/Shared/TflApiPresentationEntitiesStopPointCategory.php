<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TflApiPresentationEntitiesStopPointCategory
{
    /**
     * $availableKeys
     * 
     * @var ?array<string> $availableKeys
     */
	#[\JMS\Serializer\Annotation\SerializedName('availableKeys')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $availableKeys = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('category')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $category = null;
    
	public function __construct()
	{
		$this->availableKeys = null;
		$this->category = null;
	}
}
