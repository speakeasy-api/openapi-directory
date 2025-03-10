<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDatalabelingV1beta1CreateInstructionRequest - Request message for CreateInstruction.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDatalabelingV1beta1CreateInstructionRequest
{
    /**
     * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1Instruction $instruction
     */
	#[\JMS\Serializer\Annotation\SerializedName('instruction')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1Instruction')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDatalabelingV1beta1Instruction $instruction = null;
    
	public function __construct()
	{
		$this->instruction = null;
	}
}
