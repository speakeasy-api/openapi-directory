<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * HttpBody - Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.This message can be used both in streaming and non-streaming API methods in the request as well as the response.It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class HttpBody
{
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     * 
     * @var ?string $contentType
     */
	#[\JMS\Serializer\Annotation\SerializedName('contentType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contentType = null;
    
    /**
     * The HTTP request/response body as raw binary.
     * 
     * @var ?string $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $data = null;
    
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     * 
     * @var ?array<array<string, mixed>> $extensions
     */
	#[\JMS\Serializer\Annotation\SerializedName('extensions')]
    #[\JMS\Serializer\Annotation\Type('array<array<string, mixed>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $extensions = null;
    
	public function __construct()
	{
		$this->contentType = null;
		$this->data = null;
		$this->extensions = null;
	}
}
