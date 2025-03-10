<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DockerImage - DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DockerImage
{
    /**
     * The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor.
     * 
     * @var ?string $buildTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('buildTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $buildTime = null;
    
    /**
     * Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource.
     * 
     * @var ?string $imageSizeBytes
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageSizeBytes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageSizeBytes = null;
    
    /**
     * Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource.
     * 
     * @var ?string $mediaType
     */
	#[\JMS\Serializer\Annotation\SerializedName('mediaType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $mediaType = null;
    
    /**
     * Required. registry_location, project_id, repository_name and image id forms a unique image name:`projects//locations//repository//dockerImages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Tags attached to this image.
     * 
     * @var ?array<string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
    /**
     * Output only. The time when the docker image was last updated.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
    /**
     * Time the image was uploaded.
     * 
     * @var ?string $uploadTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('uploadTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uploadTime = null;
    
    /**
     * Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf
     * 
     * @var ?string $uri
     */
	#[\JMS\Serializer\Annotation\SerializedName('uri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uri = null;
    
	public function __construct()
	{
		$this->buildTime = null;
		$this->imageSizeBytes = null;
		$this->mediaType = null;
		$this->name = null;
		$this->tags = null;
		$this->updateTime = null;
		$this->uploadTime = null;
		$this->uri = null;
	}
}
