import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserContentByDateJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetUserContentByDateJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentByDateJson200ApplicationJsonDebug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentByDateJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=assetID" })
  assetID?: number;

  @SpeakeasyMetadata({ data: "json, name=assetURL" })
  assetURL?: string;

  @SpeakeasyMetadata({ data: "json, name=commentBody" })
  commentBody?: string;

  @SpeakeasyMetadata({ data: "json, name=commentID" })
  commentID?: number;

  @SpeakeasyMetadata({ data: "json, name=commentSequence" })
  commentSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=commentTitle" })
  commentTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=commentType" })
  commentType?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=editorsSelection" })
  editorsSelection?: number;

  @SpeakeasyMetadata({ data: "json, name=lft" })
  lft?: number;

  @SpeakeasyMetadata({ data: "json, name=parentID" })
  parentID?: any;

  @SpeakeasyMetadata({ data: "json, name=recommendationCount" })
  recommendationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=replyCount" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rgt" })
  rgt?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusID" })
  statusID?: number;

  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=userDisplayName" })
  userDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=userID" })
  userID?: number;

  @SpeakeasyMetadata({ data: "json, name=userLocation" })
  userLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=userTitle" })
  userTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=userURL" })
  userURL?: number;
}


export class GetUserContentByDateJson200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentByDateJson200ApplicationJsonResultsComments })
  comments?: GetUserContentByDateJson200ApplicationJsonResultsComments[];

  @SpeakeasyMetadata({ data: "json, name=totalCommentsFound" })
  totalCommentsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;
}


export class GetUserContentByDateJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: GetUserContentByDateJson200ApplicationJsonDebug;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetUserContentByDateJson200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentByDateJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserContentByDateJsonQueryParams;

  @SpeakeasyMetadata()
  security: GetUserContentByDateJsonSecurity;
}


export class GetUserContentByDateJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserContentByDateJSON200ApplicationJSONObject?: GetUserContentByDateJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
