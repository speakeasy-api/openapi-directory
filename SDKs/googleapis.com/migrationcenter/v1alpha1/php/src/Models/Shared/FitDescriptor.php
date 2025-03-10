<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * FitDescriptor - Describes the fit level of an asset for migration to a specific target.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class FitDescriptor
{
    /**
     * Fit level.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\FitDescriptorFitLevelEnum $fitLevel
     */
	#[\JMS\Serializer\Annotation\SerializedName('fitLevel')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\FitDescriptorFitLevelEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?FitDescriptorFitLevelEnum $fitLevel = null;
    
	public function __construct()
	{
		$this->fitLevel = null;
	}
}
