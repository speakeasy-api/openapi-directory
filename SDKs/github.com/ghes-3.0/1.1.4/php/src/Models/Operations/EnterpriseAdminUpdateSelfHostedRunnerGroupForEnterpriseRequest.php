<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody $requestBody = null;
    
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     * 
     * @var string $enterprise
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=enterprise')]
    public string $enterprise;
    
    /**
     * Unique identifier of the self-hosted runner group.
     * 
     * @var int $runnerGroupId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=runner_group_id')]
    public int $runnerGroupId;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->enterprise = "";
		$this->runnerGroupId = 0;
	}
}
