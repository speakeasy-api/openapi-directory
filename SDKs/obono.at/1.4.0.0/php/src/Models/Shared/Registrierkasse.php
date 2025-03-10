<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Registrierkasse - Information about a particular `Registrierkasse`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Registrierkasse
{
    /**
     * The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler".
     * 
     * @var ?string $benutzerschluessel
     */
	#[\JMS\Serializer\Annotation\SerializedName('Benutzerschluessel')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $benutzerschluessel = null;
    
    /**
     * The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`.
     * 
     * @var ?string $kassenID
     */
	#[\JMS\Serializer\Annotation\SerializedName('Kassen-ID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kassenID = null;
    
    /**
     * The `_uuid` of the paired "Signaturerstellungseinheit".
     * 
     * @var ?string $signaturerstellungseinheitUUID
     */
	#[\JMS\Serializer\Annotation\SerializedName('Signaturerstellungseinheit-UUID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $signaturerstellungseinheitUUID = null;
    
    /**
     * URL of the particular `Registrierkasse` instance.
     * 
     * @var ?string $href
     */
	#[\JMS\Serializer\Annotation\SerializedName('_href')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $href = null;
    
    /**
     * Unique ID of the particular `Registrierkasse` instance.
     * 
     * @var ?string $uuid
     */
	#[\JMS\Serializer\Annotation\SerializedName('_uuid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uuid = null;
    
	public function __construct()
	{
		$this->benutzerschluessel = null;
		$this->kassenID = null;
		$this->signaturerstellungseinheitUUID = null;
		$this->href = null;
		$this->uuid = null;
	}
}
