import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdIntegrationsJiraServerPathParams;
}


export class GetTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraScope?: shared.JiraScope;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson;
}
