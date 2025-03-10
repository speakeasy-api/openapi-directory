<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TppMessage429AIS
{
    /**
     * Category of the TPP message category.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\TppMessageCategoryEnum $category
     */
	#[\JMS\Serializer\Annotation\SerializedName('category')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TppMessageCategoryEnum>')]
    public TppMessageCategoryEnum $category;
    
    /**
     * Message codes for HTTP Error code 429 (TOO MANY REQUESTS).
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\MessageCode429AISEnum $code
     */
	#[\JMS\Serializer\Annotation\SerializedName('code')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MessageCode429AISEnum>')]
    public MessageCode429AISEnum $code;
    
	#[\JMS\Serializer\Annotation\SerializedName('path')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $path = null;
    
    /**
     * Additional explaining text to the TPP.
     * 
     * @var ?string $text
     */
	#[\JMS\Serializer\Annotation\SerializedName('text')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $text = null;
    
	public function __construct()
	{
		$this->category = \OpenAPI\OpenAPI\Models\Shared\TppMessageCategoryEnum::ERROR;
		$this->code = \OpenAPI\OpenAPI\Models\Shared\MessageCode429AISEnum::ACCESS_EXCEEDED;
		$this->path = null;
		$this->text = null;
	}
}
