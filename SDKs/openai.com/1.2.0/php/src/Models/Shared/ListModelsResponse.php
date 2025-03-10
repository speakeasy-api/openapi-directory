<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListModelsResponse - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListModelsResponse
{
    /**
     * $data
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Model> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Model>')]
    public array $data;
    
	#[\JMS\Serializer\Annotation\SerializedName('object')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $object;
    
	public function __construct()
	{
		$this->data = [];
		$this->object = "";
	}
}
