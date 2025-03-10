<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ParametersRow
{
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $description;
    
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $displayName;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('isCore')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isCore = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('maxColorValue')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $maxColorValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('preferredUnit')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $preferredUnit;
    
	public function __construct()
	{
		$this->description = "";
		$this->displayName = "";
		$this->id = 0;
		$this->isCore = null;
		$this->maxColorValue = null;
		$this->name = "";
		$this->preferredUnit = "";
	}
}
