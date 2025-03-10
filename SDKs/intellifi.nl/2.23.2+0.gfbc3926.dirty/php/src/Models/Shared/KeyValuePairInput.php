<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * KeyValuePairInput - A JSON object containing Key-value information
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class KeyValuePairInput
{
    /**
     * Unique identifier for the value.
     * 
     * @var ?string $kvKey
     */
	#[\JMS\Serializer\Annotation\SerializedName('kv_key')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kvKey = null;
    
    /**
     * The value of the key value pair.
     * 
     * @var mixed $kvValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('kv_value')]
    #[\JMS\Serializer\Annotation\Type('mixed')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public mixed $kvValue = null;
    
	public function __construct()
	{
		$this->kvKey = null;
		$this->kvValue = null;
	}
}
