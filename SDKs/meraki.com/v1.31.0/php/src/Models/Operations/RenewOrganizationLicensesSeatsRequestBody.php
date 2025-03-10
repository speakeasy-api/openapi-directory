<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class RenewOrganizationLicensesSeatsRequestBody
{
    /**
     * The ID of the SM license to renew. This license must already be assigned to an SM network
     * 
     * @var string $licenseIdToRenew
     */
	#[\JMS\Serializer\Annotation\SerializedName('licenseIdToRenew')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $licenseIdToRenew;
    
    /**
     * The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'
     * 
     * @var string $unusedLicenseId
     */
	#[\JMS\Serializer\Annotation\SerializedName('unusedLicenseId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $unusedLicenseId;
    
	public function __construct()
	{
		$this->licenseIdToRenew = "";
		$this->unusedLicenseId = "";
	}
}
