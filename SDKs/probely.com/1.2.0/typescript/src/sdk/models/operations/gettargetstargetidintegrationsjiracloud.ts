import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdIntegrationsJiraCloudPathParams;
}


export class GetTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraScope?: shared.JiraScope;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJson;
}
