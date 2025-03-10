<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class FailedSubmissionV4
{
	#[\JMS\Serializer\Annotation\SerializedName('failedSubmission')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\FailedPayeeV4')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?FailedPayeeV4 $failedSubmission = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('failureMessage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $failureMessage = null;
    
	public function __construct()
	{
		$this->failedSubmission = null;
		$this->failureMessage = null;
	}
}
