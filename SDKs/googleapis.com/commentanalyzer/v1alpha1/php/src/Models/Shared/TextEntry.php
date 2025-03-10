<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TextEntry - Represents a body of text.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TextEntry
{
    /**
     * UTF-8 encoded text.
     * 
     * @var ?string $text
     */
	#[\JMS\Serializer\Annotation\SerializedName('text')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $text = null;
    
    /**
     * Type of the text field.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TextEntryTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TextEntryTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TextEntryTypeEnum $type = null;
    
	public function __construct()
	{
		$this->text = null;
		$this->type = null;
	}
}
