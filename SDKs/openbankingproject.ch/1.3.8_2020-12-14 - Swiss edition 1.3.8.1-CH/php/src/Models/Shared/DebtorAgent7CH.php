<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DebtorAgent7CH - Reference to an debtorAgent by either
 * 
 *   * BIC, of the debtor bank, or
 *   * IID, of the debtor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DebtorAgent7CH
{
    /**
     * BICFI
     * 
     * 
     * 
     * @var ?string $bic
     */
	#[\JMS\Serializer\Annotation\SerializedName('bic')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bic = null;
    
    /**
     * Institiutional identification of a bank (Clearing System Member ID)
     * 
     * adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\InstitutionalIdentification2 $iid
     */
	#[\JMS\Serializer\Annotation\SerializedName('iid')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InstitutionalIdentification2')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InstitutionalIdentification2 $iid = null;
    
	public function __construct()
	{
		$this->bic = null;
		$this->iid = null;
	}
}
