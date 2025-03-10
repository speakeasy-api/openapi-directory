<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Weight
{
    /**
     * Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`" 
     * 
     * @var ?string $unit
     */
	#[\JMS\Serializer\Annotation\SerializedName('unit')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $unit = null;
    
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     * 
     * @var ?string $value
     */
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $value = null;
    
	public function __construct()
	{
		$this->unit = null;
		$this->value = null;
	}
}
