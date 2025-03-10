<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PatientHealthResultResourceRelationshipsAction
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientHealthResultResourceRelationshipsActionData')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PatientHealthResultResourceRelationshipsActionData $data = null;
    
    /**
     * $links
     * 
     * @var ?array<string, mixed> $links
     */
	#[\JMS\Serializer\Annotation\SerializedName('links')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $links = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->links = null;
	}
}
