<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ConsentArtefactResponseConsentConsentDetail
{
    /**
     * $careContexts
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailCareContexts> $careContexts
     */
	#[\JMS\Serializer\Annotation\SerializedName('careContexts')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailCareContexts>')]
    public array $careContexts;
    
	#[\JMS\Serializer\Annotation\SerializedName('consentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $consentId;
    
	#[\JMS\Serializer\Annotation\SerializedName('consentManager')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailConsentManager')]
    public ConsentArtefactResponseConsentConsentDetailConsentManager $consentManager;
    
	#[\JMS\Serializer\Annotation\SerializedName('createdAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
    /**
     * $hiTypes
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum> $hiTypes
     */
	#[\JMS\Serializer\Annotation\SerializedName('hiTypes')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum>>')]
    public array $hiTypes;
    
	#[\JMS\Serializer\Annotation\SerializedName('hip')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailHip')]
    public ConsentArtefactResponseConsentConsentDetailHip $hip;
    
	#[\JMS\Serializer\Annotation\SerializedName('hiu')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailHiu')]
    public ConsentArtefactResponseConsentConsentDetailHiu $hiu;
    
	#[\JMS\Serializer\Annotation\SerializedName('patient')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID')]
    public ConsentManagerPatientID $patient;
    
	#[\JMS\Serializer\Annotation\SerializedName('permission')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Permission')]
    public Permission $permission;
    
	#[\JMS\Serializer\Annotation\SerializedName('purpose')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\UsePurpose')]
    public UsePurpose $purpose;
    
	#[\JMS\Serializer\Annotation\SerializedName('requester')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Requester')]
    public Requester $requester;
    
	#[\JMS\Serializer\Annotation\SerializedName('schemaVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $schemaVersion = null;
    
	public function __construct()
	{
		$this->careContexts = [];
		$this->consentId = "";
		$this->consentManager = new \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailConsentManager();
		$this->createdAt = new \DateTime();
		$this->hiTypes = [];
		$this->hip = new \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailHip();
		$this->hiu = new \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailHiu();
		$this->patient = new \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID();
		$this->permission = new \OpenAPI\OpenAPI\Models\Shared\Permission();
		$this->purpose = new \OpenAPI\OpenAPI\Models\Shared\UsePurpose();
		$this->requester = new \OpenAPI\OpenAPI\Models\Shared\Requester();
		$this->schemaVersion = null;
	}
}
