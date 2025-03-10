<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListAlertListAlertResponse - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListAlertListAlertResponse
{
    /**
     * $alerts
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\MonitorV1Alert> $alerts
     */
	#[\JMS\Serializer\Annotation\SerializedName('alerts')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MonitorV1Alert>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $alerts = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\ListAlertListAlertResponseMeta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ListAlertListAlertResponseMeta $meta = null;
    
	public function __construct()
	{
		$this->alerts = null;
		$this->meta = null;
	}
}
