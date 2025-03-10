<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetBlobsRequest
{
    /**
     * Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.
     * 
     * @var ?\DateTime $after
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=after,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $after = null;
    
    /**
     * Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     * 
     * @var ?string $afterId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=after_id')]
    public ?string $afterId = null;
    
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.
     * 
     * @var ?string $before
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=before')]
    public ?string $before = null;
    
    /**
     * Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     * 
     * @var ?string $beforeId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=before_id')]
    public ?string $beforeId = null;
    
    /**
     * Filter based on the unique blob_key
     * 
     * @var ?string $blobKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=blob_key')]
    public ?string $blobKey = null;
    
    /**
     * Filter based on the content type of the blob.
     * 
     * @var ?string $contentType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=content_type')]
    public ?string $contentType = null;
    
    /**
     * Filter based on the filename of the blob.
     * 
     * @var ?string $filename
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filename')]
    public ?string $filename = null;
    
    /**
     * Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.
     * 
     * @var ?string $from
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=from')]
    public ?string $from = null;
    
    /**
     * Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.
     * 
     * @var ?string $fromId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=from_id')]
    public ?string $fromId = null;
    
    /**
     * Filter based on the hash of the blob.
     * 
     * @var ?string $hash
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=hash')]
    public ?string $hash = null;
    
    /**
     * Unique identifier
     * 
     * @var ?string $id
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=id')]
    public ?string $id = null;
    
    /**
     * Removes `url` fields from output and shows `_id` instead of `_url` in references.
     * 
     * @var ?bool $idOnly
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=id_only')]
    public ?bool $idOnly = null;
    
    /**
     * Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
     * 
     * @var ?int $limit
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
    /**
     * Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
     * 
     * @var ?string $populate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=populate')]
    public ?string $populate = null;
    
    /**
     * Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
     * 
     * @var ?bool $resultsOnly
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=results_only')]
    public ?bool $resultsOnly = null;
    
    /**
     * Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.
     * 
     * @var ?string $select
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=select')]
    public ?string $select = null;
    
    /**
     * Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
     * 
     * @var ?string $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?string $sort = null;
    
    /**
     * Filter on the time the resource was created.
     * 
     * @var ?string $timeCreated
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=time_created')]
    public ?string $timeCreated = null;
    
    /**
     * Filter based on the last time the blob was accessed
     * 
     * @var ?string $timeLastAccessed
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=time_last_accessed')]
    public ?string $timeLastAccessed = null;
    
    /**
     * Filter on the time the resource was last updated
     * 
     * @var ?string $timeUpdated
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=time_updated')]
    public ?string $timeUpdated = null;
    
    /**
     * Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
     * 
     * @var ?float $timeoutS
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=timeout_s')]
    public ?float $timeoutS = null;
    
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.
     * 
     * @var ?string $until
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=until')]
    public ?string $until = null;
    
    /**
     * Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.
     * 
     * @var ?string $untilId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=until_id')]
    public ?string $untilId = null;
    
	public function __construct()
	{
		$this->after = null;
		$this->afterId = null;
		$this->before = null;
		$this->beforeId = null;
		$this->blobKey = null;
		$this->contentType = null;
		$this->filename = null;
		$this->from = null;
		$this->fromId = null;
		$this->hash = null;
		$this->id = null;
		$this->idOnly = null;
		$this->limit = null;
		$this->populate = null;
		$this->resultsOnly = null;
		$this->select = null;
		$this->sort = null;
		$this->timeCreated = null;
		$this->timeLastAccessed = null;
		$this->timeUpdated = null;
		$this->timeoutS = null;
		$this->until = null;
		$this->untilId = null;
	}
}
