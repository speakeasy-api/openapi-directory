<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ContactsResponse - successful operation
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ContactsResponse
{
    /**
     * $data
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Contact> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Contact>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $data = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ContactsResponseError')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ContactsResponseError $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pagination')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ContactsResponsePagination')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ContactsResponsePagination $pagination = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('success')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $success = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->error = null;
		$this->pagination = null;
		$this->success = null;
	}
}
