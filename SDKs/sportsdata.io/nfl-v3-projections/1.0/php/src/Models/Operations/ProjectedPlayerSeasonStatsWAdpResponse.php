<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ProjectedPlayerSeasonStatsWAdpResponse
{
	
    public string $contentType;
    
    /**
     * $playerSeasonProjections
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PlayerSeasonProjection> $playerSeasonProjections
     */
	
    public ?array $playerSeasonProjections = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->playerSeasonProjections = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
