<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ImageRawDisk - The parameters of the raw disk image.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ImageRawDisk
{
    /**
     * The format used to encode and transmit the block device, which should be TAR. This is just a container and transmission format and not a runtime format. Provided by the client when the disk image is created.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ImageRawDiskContainerTypeEnum $containerType
     */
	#[\JMS\Serializer\Annotation\SerializedName('containerType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ImageRawDiskContainerTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageRawDiskContainerTypeEnum $containerType = null;
    
    /**
     * [Deprecated] This field is deprecated. An optional SHA1 checksum of the disk image before unpackaging provided by the client when the disk image is created.
     * 
     * @var ?string $sha1Checksum
     */
	#[\JMS\Serializer\Annotation\SerializedName('sha1Checksum')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sha1Checksum = null;
    
    /**
     * The full Google Cloud Storage URL where the raw disk image archive is stored. The following are valid formats for the URL: - https://storage.googleapis.com/bucket_name/image_archive_name - https://storage.googleapis.com/bucket_name/folder_name/ image_archive_name In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL 
     * 
     * @var ?string $source
     */
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $source = null;
    
	public function __construct()
	{
		$this->containerType = null;
		$this->sha1Checksum = null;
		$this->source = null;
	}
}
