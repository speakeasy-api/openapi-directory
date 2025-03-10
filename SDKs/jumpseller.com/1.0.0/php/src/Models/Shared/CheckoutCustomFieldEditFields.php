<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CheckoutCustomFieldEditFields
{
    /**
     * Area of the CheckoutCustomField
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsAreaEnum $area
     */
	#[\JMS\Serializer\Annotation\SerializedName('area')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsAreaEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CheckoutCustomFieldEditFieldsAreaEnum $area = null;
    
    /**
     * The values for the CheckoutCustomField selection
     * 
     * @var ?array<string> $customFieldSelectOptions
     */
	#[\JMS\Serializer\Annotation\SerializedName('custom_field_select_options')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $customFieldSelectOptions = null;
    
    /**
     * True if the CheckoutCustomField can be removed from the store
     * 
     * @var ?bool $deletable
     */
	#[\JMS\Serializer\Annotation\SerializedName('deletable')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $deletable = null;
    
    /**
     * Label given to the CheckoutCustomField
     * 
     * @var ?string $label
     */
	#[\JMS\Serializer\Annotation\SerializedName('label')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $label = null;
    
    /**
     * Position of the CheckoutCustomField
     * 
     * @var ?int $position
     */
	#[\JMS\Serializer\Annotation\SerializedName('position')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $position = null;
    
    /**
     * True if the CheckoutCustomField is mandatory
     * 
     * @var ?bool $required
     */
	#[\JMS\Serializer\Annotation\SerializedName('required')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $required = null;
    
    /**
     * Type of the CheckoutCustomField
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CheckoutCustomFieldEditFieldsTypeEnum $type = null;
    
	public function __construct()
	{
		$this->area = null;
		$this->customFieldSelectOptions = null;
		$this->deletable = null;
		$this->label = null;
		$this->position = null;
		$this->required = null;
		$this->type = null;
	}
}
