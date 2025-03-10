<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetCertificatesCertificatesResponseCertificateStatus - Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetCertificatesCertificatesResponseCertificateStatus
{
    /**
     * If issuance or renewal reports `failed`, this property contains information about what happened
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetCertificatesCertificatesResponseCertificateStatusError $error
     */
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetCertificatesCertificatesResponseCertificateStatusError')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetCertificatesCertificatesResponseCertificateStatusError $error = null;
    
    /**
     * Status of the issuance process of the Certificate
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum $issuance
     */
	#[\JMS\Serializer\Annotation\SerializedName('issuance')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum $issuance = null;
    
    /**
     * Status of the renewal process of the Certificate.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetCertificatesCertificatesResponseCertificateStatusRenewalEnum $renewal
     */
	#[\JMS\Serializer\Annotation\SerializedName('renewal')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\GetCertificatesCertificatesResponseCertificateStatusRenewalEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetCertificatesCertificatesResponseCertificateStatusRenewalEnum $renewal = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->issuance = null;
		$this->renewal = null;
	}
}
