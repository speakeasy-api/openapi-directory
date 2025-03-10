<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateAFileDefaultApplicationJSON13
{
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $detail;
    
	#[\JMS\Serializer\Annotation\SerializedName('retry_after')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $retryAfter = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\CreateAFileDefaultApplicationJSON13StatusEnum>')]
    public CreateAFileDefaultApplicationJSON13StatusEnum $status;
    
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $title;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\CreateAFileDefaultApplicationJSON13TypeEnum>')]
    public CreateAFileDefaultApplicationJSON13TypeEnum $type;
    
	public function __construct()
	{
		$this->detail = "";
		$this->retryAfter = null;
		$this->status = \OpenAPI\OpenAPI\Models\Operations\CreateAFileDefaultApplicationJSON13StatusEnum::FOUR_HUNDRED_AND_TWENTY_NINE;
		$this->title = "";
		$this->type = \OpenAPI\OpenAPI\Models\Operations\CreateAFileDefaultApplicationJSON13TypeEnum::RATE_LIMITED_ERROR;
	}
}
