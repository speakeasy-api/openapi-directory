<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo - Contains all the execution details for a workflow instance. Next available id: 24
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo
{
    /**
     * The event data user sends as request.
     * 
     * @var ?string $clientId
     */
	#[\JMS\Serializer\Annotation\SerializedName('clientId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientId = null;
    
    /**
     * Auto-generated.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CrmlogErrorCode $errorCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('errorCode')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CrmlogErrorCode')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CrmlogErrorCode $errorCode = null;
    
    /**
     * Errors, warnings, and informationals associated with the workflow/task. The order in which the errors were added by the workflow/task is maintained.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoErrorDetail> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoErrorDetail>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
    /**
     * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails $eventExecutionDetails
     */
	#[\JMS\Serializer\Annotation\SerializedName('eventExecutionDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails $eventExecutionDetails = null;
    
    /**
     * Auto-generated primary key.
     * 
     * @var ?string $eventExecutionInfoId
     */
	#[\JMS\Serializer\Annotation\SerializedName('eventExecutionInfoId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $eventExecutionInfoId = null;
    
    /**
     * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoExecutionTraceInfo $executionTraceInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('executionTraceInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoExecutionTraceInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EnterpriseCrmEventbusProtoExecutionTraceInfo $executionTraceInfo = null;
    
    /**
     * Auto-generated.
     * 
     * @var ?string $lastModifiedTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('lastModifiedTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lastModifiedTime = null;
    
    /**
     * The ways user posts this event.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum $postMethod
     */
	#[\JMS\Serializer\Annotation\SerializedName('postMethod')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum $postMethod = null;
    
    /**
     * Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum $product
     */
	#[\JMS\Serializer\Annotation\SerializedName('product')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum $product = null;
    
    /**
     * Optional. This is used to de-dup incoming request.
     * 
     * @var ?string $requestId
     */
	#[\JMS\Serializer\Annotation\SerializedName('requestId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $requestId = null;
    
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters $requestParams
     */
	#[\JMS\Serializer\Annotation\SerializedName('requestParams')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EnterpriseCrmFrontendsEventbusProtoEventParameters $requestParams = null;
    
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters $responseParams
     */
	#[\JMS\Serializer\Annotation\SerializedName('responseParams')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EnterpriseCrmFrontendsEventbusProtoEventParameters $responseParams = null;
    
    /**
     * Workflow snapshot number.
     * 
     * @var ?string $snapshotNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('snapshotNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $snapshotNumber = null;
    
    /**
     * Tenant this event is created. Used to reschedule the event to correct tenant.
     * 
     * @var ?string $tenant
     */
	#[\JMS\Serializer\Annotation\SerializedName('tenant')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $tenant = null;
    
    /**
     * The trigger id of the workflow trigger config. If both trigger_id and client_id is present, the workflow is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.
     * 
     * @var ?string $triggerId
     */
	#[\JMS\Serializer\Annotation\SerializedName('triggerId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $triggerId = null;
    
    /**
     * Required. Pointer to the workflow it is executing.
     * 
     * @var ?string $workflowId
     */
	#[\JMS\Serializer\Annotation\SerializedName('workflowId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workflowId = null;
    
    /**
     * Name of the workflow.
     * 
     * @var ?string $workflowName
     */
	#[\JMS\Serializer\Annotation\SerializedName('workflowName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workflowName = null;
    
    /**
     * Time interval in seconds to schedule retry of workflow in manifold when workflow is already running
     * 
     * @var ?string $workflowRetryBackoffIntervalSeconds
     */
	#[\JMS\Serializer\Annotation\SerializedName('workflowRetryBackoffIntervalSeconds')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workflowRetryBackoffIntervalSeconds = null;
    
	public function __construct()
	{
		$this->clientId = null;
		$this->createTime = null;
		$this->errorCode = null;
		$this->errors = null;
		$this->eventExecutionDetails = null;
		$this->eventExecutionInfoId = null;
		$this->executionTraceInfo = null;
		$this->lastModifiedTime = null;
		$this->postMethod = null;
		$this->product = null;
		$this->requestId = null;
		$this->requestParams = null;
		$this->responseParams = null;
		$this->snapshotNumber = null;
		$this->tenant = null;
		$this->triggerId = null;
		$this->workflowId = null;
		$this->workflowName = null;
		$this->workflowRetryBackoffIntervalSeconds = null;
	}
}
