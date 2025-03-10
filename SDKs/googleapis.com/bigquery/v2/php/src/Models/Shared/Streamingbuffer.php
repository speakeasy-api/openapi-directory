<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Streamingbuffer
{
    /**
     * [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer.
     * 
     * @var ?string $estimatedBytes
     */
	#[\JMS\Serializer\Annotation\SerializedName('estimatedBytes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $estimatedBytes = null;
    
    /**
     * [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer.
     * 
     * @var ?string $estimatedRows
     */
	#[\JMS\Serializer\Annotation\SerializedName('estimatedRows')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $estimatedRows = null;
    
    /**
     * [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.
     * 
     * @var ?string $oldestEntryTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('oldestEntryTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $oldestEntryTime = null;
    
	public function __construct()
	{
		$this->estimatedBytes = null;
		$this->estimatedRows = null;
		$this->oldestEntryTime = null;
	}
}
