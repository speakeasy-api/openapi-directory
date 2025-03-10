<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListMemberResponse
{
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ListMemberListMemberResponse $listMemberResponse
     */
	
    public ?ListMemberListMemberResponse $listMemberResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listMemberResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
