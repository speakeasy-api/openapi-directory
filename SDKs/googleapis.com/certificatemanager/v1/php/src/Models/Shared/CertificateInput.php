<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CertificateInput - Defines TLS certificate.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CertificateInput
{
    /**
     * One or more paragraphs of text description of a certificate.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Set of labels associated with a Certificate.
     * 
     * @var ?array<string, string> $labels
     */
	#[\JMS\Serializer\Annotation\SerializedName('labels')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $labels = null;
    
    /**
     * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ManagedCertificateInput $managed
     */
	#[\JMS\Serializer\Annotation\SerializedName('managed')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ManagedCertificateInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ManagedCertificateInput $managed = null;
    
    /**
     * A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/* /locations/* /certificates/*`.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Immutable. The scope of the certificate.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CertificateScopeEnum $scope
     */
	#[\JMS\Serializer\Annotation\SerializedName('scope')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CertificateScopeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CertificateScopeEnum $scope = null;
    
    /**
     * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SelfManagedCertificate $selfManaged
     */
	#[\JMS\Serializer\Annotation\SerializedName('selfManaged')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SelfManagedCertificate')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SelfManagedCertificate $selfManaged = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->labels = null;
		$this->managed = null;
		$this->name = null;
		$this->scope = null;
		$this->selfManaged = null;
	}
}
