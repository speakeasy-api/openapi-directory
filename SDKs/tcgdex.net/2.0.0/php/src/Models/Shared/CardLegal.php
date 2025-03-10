<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CardLegal
{
	#[\JMS\Serializer\Annotation\SerializedName('expanded')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $expanded = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('standard')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $standard = null;
    
	public function __construct()
	{
		$this->expanded = null;
		$this->standard = null;
	}
}
