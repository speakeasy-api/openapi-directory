<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TppMessage400SBS
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
     * Message codes defined for signing baskets for HTTP Error code 400 (BAD_REQUEST).
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\MessageCode400SBSEnum $code
     */
	#[\JMS\Serializer\Annotation\SerializedName('code')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MessageCode400SBSEnum>')]
    public MessageCode400SBSEnum $code;
    
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
		$this->code = \OpenAPI\OpenAPI\Models\Shared\MessageCode400SBSEnum::FORMAT_ERROR;
		$this->path = null;
		$this->text = null;
	}
}
