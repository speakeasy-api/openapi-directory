<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest
{
    /**
     * V1 error format.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\XgafvEnum $dollarXgafv
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=$.xgafv')]
    public ?\OpenAPI\OpenAPI\Models\Shared\XgafvEnum $dollarXgafv = null;
    
    /**
     * OAuth access token.
     * 
     * @var ?string $accessToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=access_token')]
    public ?string $accessToken = null;
    
    /**
     * Data format for response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * JSONP
     * 
     * @var ?string $callback
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=callback')]
    public ?string $callback = null;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
     * 
     * @var ?string $filter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter')]
    public ?string $filter = null;
    
    /**
     * Optional user-provided custom filter.
     * 
     * @var ?string $filterParamsCustomFilter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.customFilter')]
    public ?string $filterParamsCustomFilter = null;
    
    /**
     * End timestamp.
     * 
     * @var ?string $filterParamsEndTime
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.endTime')]
    public ?string $filterParamsEndTime = null;
    
    /**
     * List of possible event statuses.
     * 
     * @var ?array<string> $filterParamsEventStatuses
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.eventStatuses')]
    public ?array $filterParamsEventStatuses = null;
    
    /**
     * Execution id.
     * 
     * @var ?string $filterParamsExecutionId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.executionId')]
    public ?string $filterParamsExecutionId = null;
    
    /**
     * Param key. DEPRECATED. User parameter_pair_key instead.
     * 
     * @var ?string $filterParamsParameterKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.parameterKey')]
    public ?string $filterParamsParameterKey = null;
    
    /**
     * Param key in the key value pair filter.
     * 
     * @var ?string $filterParamsParameterPairKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.parameterPairKey')]
    public ?string $filterParamsParameterPairKey = null;
    
    /**
     * Param value in the key value pair filter.
     * 
     * @var ?string $filterParamsParameterPairValue
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.parameterPairValue')]
    public ?string $filterParamsParameterPairValue = null;
    
    /**
     * Param type.
     * 
     * @var ?string $filterParamsParameterType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.parameterType')]
    public ?string $filterParamsParameterType = null;
    
    /**
     * Param value. DEPRECATED. User parameter_pair_value instead.
     * 
     * @var ?string $filterParamsParameterValue
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.parameterValue')]
    public ?string $filterParamsParameterValue = null;
    
    /**
     * Start timestamp.
     * 
     * @var ?string $filterParamsStartTime
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.startTime')]
    public ?string $filterParamsStartTime = null;
    
    /**
     * List of possible task statuses.
     * 
     * @var ?array<string> $filterParamsTaskStatuses
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.taskStatuses')]
    public ?array $filterParamsTaskStatuses = null;
    
    /**
     * Workflow name.
     * 
     * @var ?string $filterParamsWorkflowName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filterParams.workflowName')]
    public ?string $filterParamsWorkflowName = null;
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * 
     * @var ?string $key
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=key')]
    public ?string $key = null;
    
    /**
     * OAuth 2.0 token for the current user.
     * 
     * @var ?string $oauthToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=oauth_token')]
    public ?string $oauthToken = null;
    
    /**
     * Optional. The results would be returned in order you specified here. Currently supporting "last_modified_time" and "create_time".
     * 
     * @var ?string $orderBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=orderBy')]
    public ?string $orderBy = null;
    
    /**
     * Optional. The size of entries in the response.
     * 
     * @var ?int $pageSize
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageSize')]
    public ?int $pageSize = null;
    
    /**
     * Optional. The token returned in the previous response.
     * 
     * @var ?string $pageToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageToken')]
    public ?string $pageToken = null;
    
    /**
     * Required. The parent resource name of the integration execution.
     * 
     * @var string $parent
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=parent')]
    public string $parent;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * 
     * @var ?string $quotaUser
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=quotaUser')]
    public ?string $quotaUser = null;
    
    /**
     * Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in event execution info will be filled and returned.
     * 
     * @var ?string $readMask
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=readMask')]
    public ?string $readMask = null;
    
    /**
     * Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
     * 
     * @var ?bool $refreshAcl
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=refreshAcl')]
    public ?bool $refreshAcl = null;
    
    /**
     * Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
     * 
     * @var ?bool $truncateParams
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=truncateParams')]
    public ?bool $truncateParams = null;
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     * 
     * @var ?string $uploadType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=uploadType')]
    public ?string $uploadType = null;
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     * 
     * @var ?string $uploadProtocol
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=upload_protocol')]
    public ?string $uploadProtocol = null;
    
	public function __construct()
	{
		$this->dollarXgafv = null;
		$this->accessToken = null;
		$this->alt = null;
		$this->callback = null;
		$this->fields = null;
		$this->filter = null;
		$this->filterParamsCustomFilter = null;
		$this->filterParamsEndTime = null;
		$this->filterParamsEventStatuses = null;
		$this->filterParamsExecutionId = null;
		$this->filterParamsParameterKey = null;
		$this->filterParamsParameterPairKey = null;
		$this->filterParamsParameterPairValue = null;
		$this->filterParamsParameterType = null;
		$this->filterParamsParameterValue = null;
		$this->filterParamsStartTime = null;
		$this->filterParamsTaskStatuses = null;
		$this->filterParamsWorkflowName = null;
		$this->key = null;
		$this->oauthToken = null;
		$this->orderBy = null;
		$this->pageSize = null;
		$this->pageToken = null;
		$this->parent = "";
		$this->prettyPrint = null;
		$this->quotaUser = null;
		$this->readMask = null;
		$this->refreshAcl = null;
		$this->truncateParams = null;
		$this->uploadType = null;
		$this->uploadProtocol = null;
	}
}
