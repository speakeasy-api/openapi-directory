<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BuildArtifact - Description of an a image to use during Skaffold rendering.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BuildArtifact
{
    /**
     * Image name in Skaffold configuration.
     * 
     * @var ?string $image
     */
	#[\JMS\Serializer\Annotation\SerializedName('image')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $image = null;
    
    /**
     * Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123".
     * 
     * @var ?string $tag
     */
	#[\JMS\Serializer\Annotation\SerializedName('tag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $tag = null;
    
	public function __construct()
	{
		$this->image = null;
		$this->tag = null;
	}
}
