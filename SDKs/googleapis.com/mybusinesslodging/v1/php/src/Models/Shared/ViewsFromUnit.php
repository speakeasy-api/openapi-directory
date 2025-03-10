<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ViewsFromUnit - Views available from the guest unit itself.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ViewsFromUnit
{
    /**
     * Beach view. A guestroom that features a window through which guests can see the beach.
     * 
     * @var ?bool $beachView
     */
	#[\JMS\Serializer\Annotation\SerializedName('beachView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $beachView = null;
    
    /**
     * Beach view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitBeachViewExceptionEnum $beachViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('beachViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitBeachViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitBeachViewExceptionEnum $beachViewException = null;
    
    /**
     * City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city.
     * 
     * @var ?bool $cityView
     */
	#[\JMS\Serializer\Annotation\SerializedName('cityView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $cityView = null;
    
    /**
     * City view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitCityViewExceptionEnum $cityViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('cityViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitCityViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitCityViewExceptionEnum $cityViewException = null;
    
    /**
     * Garden view. A guestroom that features a window through which guests can see a garden.
     * 
     * @var ?bool $gardenView
     */
	#[\JMS\Serializer\Annotation\SerializedName('gardenView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $gardenView = null;
    
    /**
     * Garden view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitGardenViewExceptionEnum $gardenViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('gardenViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitGardenViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitGardenViewExceptionEnum $gardenViewException = null;
    
    /**
     * Lake view.
     * 
     * @var ?bool $lakeView
     */
	#[\JMS\Serializer\Annotation\SerializedName('lakeView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $lakeView = null;
    
    /**
     * Lake view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitLakeViewExceptionEnum $lakeViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('lakeViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitLakeViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitLakeViewExceptionEnum $lakeViewException = null;
    
    /**
     * Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope.
     * 
     * @var ?bool $landmarkView
     */
	#[\JMS\Serializer\Annotation\SerializedName('landmarkView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $landmarkView = null;
    
    /**
     * Landmark view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitLandmarkViewExceptionEnum $landmarkViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('landmarkViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitLandmarkViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitLandmarkViewExceptionEnum $landmarkViewException = null;
    
    /**
     * Ocean view. A guestroom that features a window through which guests can see the ocean.
     * 
     * @var ?bool $oceanView
     */
	#[\JMS\Serializer\Annotation\SerializedName('oceanView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $oceanView = null;
    
    /**
     * Ocean view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitOceanViewExceptionEnum $oceanViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('oceanViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitOceanViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitOceanViewExceptionEnum $oceanViewException = null;
    
    /**
     * Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool.
     * 
     * @var ?bool $poolView
     */
	#[\JMS\Serializer\Annotation\SerializedName('poolView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $poolView = null;
    
    /**
     * Pool view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitPoolViewExceptionEnum $poolViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('poolViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitPoolViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitPoolViewExceptionEnum $poolViewException = null;
    
    /**
     * Valley view. A guestroom that features a window through which guests can see over a valley.
     * 
     * @var ?bool $valleyView
     */
	#[\JMS\Serializer\Annotation\SerializedName('valleyView')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $valleyView = null;
    
    /**
     * Valley view exception.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitValleyViewExceptionEnum $valleyViewException
     */
	#[\JMS\Serializer\Annotation\SerializedName('valleyViewException')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ViewsFromUnitValleyViewExceptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ViewsFromUnitValleyViewExceptionEnum $valleyViewException = null;
    
	public function __construct()
	{
		$this->beachView = null;
		$this->beachViewException = null;
		$this->cityView = null;
		$this->cityViewException = null;
		$this->gardenView = null;
		$this->gardenViewException = null;
		$this->lakeView = null;
		$this->lakeViewException = null;
		$this->landmarkView = null;
		$this->landmarkViewException = null;
		$this->oceanView = null;
		$this->oceanViewException = null;
		$this->poolView = null;
		$this->poolViewException = null;
		$this->valleyView = null;
		$this->valleyViewException = null;
	}
}
