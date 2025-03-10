<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateTeamMemberRequest
{
    /**
     * An object containing the fields to POST for the request.
     * 
     * 
     * See the corresponding object definition for field details.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\UpdateTeamMemberRequest $updateTeamMemberRequest
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\UpdateTeamMemberRequest $updateTeamMemberRequest;
    
    /**
     * The ID of the team member to update.
     * 
     * @var string $teamMemberId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=team_member_id')]
    public string $teamMemberId;
    
	public function __construct()
	{
		$this->updateTeamMemberRequest = new \OpenAPI\OpenAPI\Models\Shared\UpdateTeamMemberRequest();
		$this->teamMemberId = "";
	}
}
