<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LDAPSSettings - LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LDAPSSettings
{
    /**
     * Certificate used to configure LDAPS.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Certificate $certificate
     */
	#[\JMS\Serializer\Annotation\SerializedName('certificate')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Certificate')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Certificate $certificate = null;
    
    /**
     * Input only. The password used to encrypt the uploaded pfx certificate.
     * 
     * @var ?string $certificatePassword
     */
	#[\JMS\Serializer\Annotation\SerializedName('certificatePassword')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $certificatePassword = null;
    
    /**
     * Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1.
     * 
     * @var ?string $certificatePfx
     */
	#[\JMS\Serializer\Annotation\SerializedName('certificatePfx')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $certificatePfx = null;
    
    /**
     * The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Output only. The current state of this LDAPS settings.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LDAPSSettingsStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LDAPSSettingsStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LDAPSSettingsStateEnum $state = null;
    
    /**
     * Output only. Last update time.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
	public function __construct()
	{
		$this->certificate = null;
		$this->certificatePassword = null;
		$this->certificatePfx = null;
		$this->name = null;
		$this->state = null;
		$this->updateTime = null;
	}
}
