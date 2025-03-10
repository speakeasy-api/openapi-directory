<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EmployerEmployerHmrcSettings - The employers' hmrc settings
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EmployerEmployerHmrcSettings
{
    /**
     * The hmrc settingss' accounting office ref
     * 
     * @var ?string $accountingOfficeRef
     */
	#[\JMS\Serializer\Annotation\SerializedName('AccountingOfficeRef')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountingOfficeRef = null;
    
    /**
     * The hmrc settingss' c o t a x ref
     * 
     * @var ?string $cotaxRef
     */
	#[\JMS\Serializer\Annotation\SerializedName('COTAXRef')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cotaxRef = null;
    
    /**
     * The hmrc settingss' contact email
     * 
     * @var ?string $contactEmail
     */
	#[\JMS\Serializer\Annotation\SerializedName('ContactEmail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactEmail = null;
    
    /**
     * The hmrc settingss' contact fax
     * 
     * @var ?string $contactFax
     */
	#[\JMS\Serializer\Annotation\SerializedName('ContactFax')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactFax = null;
    
    /**
     * The hmrc settingss' contact first name
     * 
     * @var ?string $contactFirstName
     */
	#[\JMS\Serializer\Annotation\SerializedName('ContactFirstName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactFirstName = null;
    
    /**
     * The hmrc settingss' contact last name
     * 
     * @var ?string $contactLastName
     */
	#[\JMS\Serializer\Annotation\SerializedName('ContactLastName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactLastName = null;
    
    /**
     * The hmrc settingss' contact telephone
     * 
     * @var ?string $contactTelephone
     */
	#[\JMS\Serializer\Annotation\SerializedName('ContactTelephone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactTelephone = null;
    
    /**
     * The hmrc settingss' employment allowance override
     * 
     * @var ?float $employmentAllowanceOverride
     */
	#[\JMS\Serializer\Annotation\SerializedName('EmploymentAllowanceOverride')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $employmentAllowanceOverride = null;
    
    /**
     * The hmrc settingss' password
     * 
     * @var ?string $password
     */
	#[\JMS\Serializer\Annotation\SerializedName('Password')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $password = null;
    
    /**
     * The hmrc settingss' s a u t r
     * 
     * @var ?string $sautr
     */
	#[\JMS\Serializer\Annotation\SerializedName('SAUTR')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sautr = null;
    
    /**
     * The hmrc settingss' sender
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsSenderEnum $sender
     */
	#[\JMS\Serializer\Annotation\SerializedName('Sender')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsSenderEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EmployerEmployerHmrcSettingsSenderEnum $sender = null;
    
    /**
     * The hmrc settingss' sender id
     * 
     * @var ?string $senderId
     */
	#[\JMS\Serializer\Annotation\SerializedName('SenderId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $senderId = null;
    
    /**
     * The hmrc settingss' state aid sector
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsStateAidSectorEnum $stateAidSector
     */
	#[\JMS\Serializer\Annotation\SerializedName('StateAidSector')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EmployerEmployerHmrcSettingsStateAidSectorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EmployerEmployerHmrcSettingsStateAidSectorEnum $stateAidSector = null;
    
    /**
     * The hmrc settingss' tax office number
     * 
     * @var ?string $taxOfficeNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('TaxOfficeNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $taxOfficeNumber = null;
    
    /**
     * The hmrc settingss' tax office reference
     * 
     * @var ?string $taxOfficeReference
     */
	#[\JMS\Serializer\Annotation\SerializedName('TaxOfficeReference')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $taxOfficeReference = null;
    
	public function __construct()
	{
		$this->accountingOfficeRef = null;
		$this->cotaxRef = null;
		$this->contactEmail = null;
		$this->contactFax = null;
		$this->contactFirstName = null;
		$this->contactLastName = null;
		$this->contactTelephone = null;
		$this->employmentAllowanceOverride = null;
		$this->password = null;
		$this->sautr = null;
		$this->sender = null;
		$this->senderId = null;
		$this->stateAidSector = null;
		$this->taxOfficeNumber = null;
		$this->taxOfficeReference = null;
	}
}
