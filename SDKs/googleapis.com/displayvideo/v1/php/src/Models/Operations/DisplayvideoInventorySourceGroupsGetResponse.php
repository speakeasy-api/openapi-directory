<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DisplayvideoInventorySourceGroupsGetResponse
{
	
    public string $contentType;
    
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\InventorySourceGroup $inventorySourceGroup
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\InventorySourceGroup $inventorySourceGroup = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->inventorySourceGroup = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
