import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdFindingsIdRetestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdFindingsIdRetest401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsIdRetest403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsIdRetest404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsIdRetestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdFindingsIdRetestPathParams;
}


export class PostTargetsTargetIdFindingsIdRetestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scan?: shared.Scan;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest404ApplicationJson;
}
