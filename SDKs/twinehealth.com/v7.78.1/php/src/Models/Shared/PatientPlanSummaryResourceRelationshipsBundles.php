<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PatientPlanSummaryResourceRelationshipsBundles
{
    /**
     * $data
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsBundlesData> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsBundlesData>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $data = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientPlanSummaryResourceRelationshipsBundlesLinks')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PatientPlanSummaryResourceRelationshipsBundlesLinks $links = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->links = null;
	}
}
