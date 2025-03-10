<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Attachment
{
    /**
     * The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema).
     * 
     * @var string $body
     */
	#[\JMS\Serializer\Annotation\SerializedName('body')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $body;
    
    /**
     * The content type of the body. It is usually represented as "application/vnd.klarna.internal.emd-v2+json"
     * 
     * @var string $contentType
     */
	#[\JMS\Serializer\Annotation\SerializedName('content_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $contentType;
    
	public function __construct()
	{
		$this->body = "";
		$this->contentType = "";
	}
}
