<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CodeScanningDeleteAnalysisRequest
{
    /**
     * The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
     * 
     * @var int $analysisId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=analysis_id')]
    public int $analysisId;
    
    /**
     * Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.`
     * 
     * @var ?string $confirmDelete
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=confirm_delete')]
    public ?string $confirmDelete = null;
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
    /**
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
	public function __construct()
	{
		$this->analysisId = 0;
		$this->confirmDelete = null;
		$this->owner = "";
		$this->repo = "";
	}
}
