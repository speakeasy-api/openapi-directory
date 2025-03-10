<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure - Planned branch closure
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure
{
    /**
     * Date when a branch is due to re-open following temporary closure
     * 
     * @var ?string $endDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('EndDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endDate = null;
    
    /**
     * Date when a branch is due to close temporarily or permanently
     * 
     * @var ?string $startDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('StartDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startDate = null;
    
	public function __construct()
	{
		$this->endDate = null;
		$this->startDate = null;
	}
}
