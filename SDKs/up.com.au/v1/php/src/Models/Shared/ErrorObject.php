<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ErrorObject - Provides information about an error processing a request.
 * 
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ErrorObject
{
    /**
     * A detailed description of this error. This should be considered unique
     * 
     * to individual occurrences of an error and subject to change. It is
     * useful for debugging purposes.
     * 
     * 
     * @var string $detail
     */
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $detail;
    
    /**
     * If applicable, location in the request that this error relates to. This
     * 
     * may be a parameter in the query string, or a an attribute in the
     * request body.
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorObjectSource $source
     */
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ErrorObjectSource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ErrorObjectSource $source = null;
    
    /**
     * The HTTP status code associated with this error. This can also be
     * 
     * obtained from the response headers. The status indicates the broad type
     * of error according to HTTP semantics.
     * 
     * 
     * @var string $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $status;
    
    /**
     * A short description of this error. This should be stable across
     * 
     * multiple occurrences of this type of error and typically expands on the
     * reason for the status code.
     * 
     * 
     * @var string $title
     */
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $title;
    
	public function __construct()
	{
		$this->detail = "";
		$this->source = null;
		$this->status = "";
		$this->title = "";
	}
}
