<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InboundWireDrawdownRequestList - A list of Inbound Wire Drawdown Request objects
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InboundWireDrawdownRequestList
{
    /**
     * The contents of the list.
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\InboundWireDrawdownRequest> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\InboundWireDrawdownRequest>')]
    public array $data;
    
    /**
     * A pointer to a place in the list.
     * 
     * @var string $nextCursor
     */
	#[\JMS\Serializer\Annotation\SerializedName('next_cursor')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nextCursor;
    
	public function __construct()
	{
		$this->data = [];
		$this->nextCursor = "";
	}
}
