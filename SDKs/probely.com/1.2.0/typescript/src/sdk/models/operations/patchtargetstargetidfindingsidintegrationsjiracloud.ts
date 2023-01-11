import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraFinding;
}


export class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraFinding?: shared.JiraFinding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson;
}
