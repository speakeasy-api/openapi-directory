<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetBatchByIdResponseBody - Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * 
 * thousands of labels at a time.
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetBatchByIdResponseBody
{
    /**
     * Link to batch errors endpoint
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyOptionalLink $batchErrorsUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('batch_errors_url')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyOptionalLink')]
    public GetBatchByIdResponseBodyOptionalLink $batchErrorsUrl;
    
    /**
     * A string that uniquely identifies the batch
     * 
     * @var string $batchId
     */
	#[\JMS\Serializer\Annotation\SerializedName('batch_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $batchId;
    
    /**
     * Link to batch labels query
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OptionalLink $batchLabelsUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('batch_labels_url')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OptionalLink')]
    public OptionalLink $batchLabelsUrl;
    
    /**
     * Custom notes you can add for each created batch
     * 
     * @var string $batchNotes
     */
	#[\JMS\Serializer\Annotation\SerializedName('batch_notes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $batchNotes;
    
    /**
     * The batch number.
     * 
     * @var string $batchNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('batch_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $batchNumber;
    
    /**
     * The batch shipments endpoint
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OptionalLink $batchShipmentsUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('batch_shipments_url')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OptionalLink')]
    public OptionalLink $batchShipmentsUrl;
    
    /**
     * The number of labels generated in the batch
     * 
     * @var int $completed
     */
	#[\JMS\Serializer\Annotation\SerializedName('completed')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $completed;
    
    /**
     * The total of errors, warnings, and completed properties
     * 
     * @var int $count
     */
	#[\JMS\Serializer\Annotation\SerializedName('count')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $count;
    
    /**
     * The date and time the batch was created in ShipEngine
     * 
     * @var \DateTime $createdAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('created_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
    /**
     * The number of errors that occurred while generating the batch
     * 
     * @var int $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $errors;
    
    /**
     * A string that uniquely identifies the external batch
     * 
     * @var string $externalBatchId
     */
	#[\JMS\Serializer\Annotation\SerializedName('external_batch_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $externalBatchId;
    
    /**
     * The form download for any customs that are needed
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyOptionalLink $formDownload
     */
	#[\JMS\Serializer\Annotation\SerializedName('form_download')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyOptionalLink')]
    public GetBatchByIdResponseBodyOptionalLink $formDownload;
    
    /**
     * The number of forms for customs that are available for download
     * 
     * @var int $forms
     */
	#[\JMS\Serializer\Annotation\SerializedName('forms')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $forms;
    
    /**
     * The label download for the batch
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelDownload $labelDownload
     */
	#[\JMS\Serializer\Annotation\SerializedName('label_download')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelDownload')]
    public GetBatchByIdResponseBodyLabelDownload $labelDownload;
    
	#[\JMS\Serializer\Annotation\SerializedName('label_format')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelFormatEnum>')]
    public GetBatchByIdResponseBodyLabelFormatEnum $labelFormat;
    
    /**
     * label layout
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelLayoutEnum $labelLayout
     */
	#[\JMS\Serializer\Annotation\SerializedName('label_layout')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelLayoutEnum>')]
    public GetBatchByIdResponseBodyLabelLayoutEnum $labelLayout;
    
    /**
     * The date and time the batch was processed in ShipEngine
     * 
     * @var \DateTime $processedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('processed_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $processedAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyBatchStatusEnum>')]
    public GetBatchByIdResponseBodyBatchStatusEnum $status;
    
    /**
     * The number of warnings that occurred while generating the batch
     * 
     * @var int $warnings
     */
	#[\JMS\Serializer\Annotation\SerializedName('warnings')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $warnings;
    
	public function __construct()
	{
		$this->batchErrorsUrl = new \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyOptionalLink();
		$this->batchId = "";
		$this->batchLabelsUrl = new \OpenAPI\OpenAPI\Models\Shared\OptionalLink();
		$this->batchNotes = "";
		$this->batchNumber = "";
		$this->batchShipmentsUrl = new \OpenAPI\OpenAPI\Models\Shared\OptionalLink();
		$this->completed = 0;
		$this->count = 0;
		$this->createdAt = new \DateTime();
		$this->errors = 0;
		$this->externalBatchId = "";
		$this->formDownload = new \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyOptionalLink();
		$this->forms = 0;
		$this->labelDownload = new \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelDownload();
		$this->labelFormat = \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelFormatEnum::PDF;
		$this->labelLayout = \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyLabelLayoutEnum::FOURX6;
		$this->processedAt = new \DateTime();
		$this->status = \OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBodyBatchStatusEnum::OPEN;
		$this->warnings = 0;
	}
}
