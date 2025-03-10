<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Linear - Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)).
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Linear
{
    /**
     * Must be greater than 0.
     * 
     * @var ?int $numFiniteBuckets
     */
	#[\JMS\Serializer\Annotation\SerializedName('numFiniteBuckets')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numFiniteBuckets = null;
    
    /**
     * Lower bound of the first bucket.
     * 
     * @var ?float $offset
     */
	#[\JMS\Serializer\Annotation\SerializedName('offset')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $offset = null;
    
    /**
     * Must be greater than 0.
     * 
     * @var ?float $width
     */
	#[\JMS\Serializer\Annotation\SerializedName('width')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $width = null;
    
	public function __construct()
	{
		$this->numFiniteBuckets = null;
		$this->offset = null;
		$this->width = null;
	}
}
