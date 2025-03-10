<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GitCreateTagRequestBody
{
    /**
     * The tag message.
     * 
     * @var string $message
     */
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $message;
    
    /**
     * The SHA of the git object this is tagging.
     * 
     * @var string $object
     */
	#[\JMS\Serializer\Annotation\SerializedName('object')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $object;
    
    /**
     * The tag's name. This is typically a version (e.g., "v0.0.1").
     * 
     * @var string $tag
     */
	#[\JMS\Serializer\Annotation\SerializedName('tag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $tag;
    
    /**
     * An object with information about the individual creating the tag.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTagger $tagger
     */
	#[\JMS\Serializer\Annotation\SerializedName('tagger')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTagger')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GitCreateTagRequestBodyTagger $tagger = null;
    
    /**
     * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTypeEnum>')]
    public GitCreateTagRequestBodyTypeEnum $type;
    
	public function __construct()
	{
		$this->message = "";
		$this->object = "";
		$this->tag = "";
		$this->tagger = null;
		$this->type = \OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTypeEnum::COMMIT;
	}
}
