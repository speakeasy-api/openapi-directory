import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraFinding;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraFinding?: shared.JiraFinding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
}
