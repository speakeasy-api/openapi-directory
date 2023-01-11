import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetMeConnectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeConnectionsQueryParams;

  @SpeakeasyMetadata()
  security: GetMeConnectionsSecurity;
}


export class GetMeConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Connection })
  connections?: shared.Connection[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
