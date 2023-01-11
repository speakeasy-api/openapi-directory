import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetUsersId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetUsersId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdPathParams;
}


export class GetUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;

  @SpeakeasyMetadata()
  getUsersId401ApplicationJSONObject?: GetUsersId401ApplicationJson;

  @SpeakeasyMetadata()
  getUsersId404ApplicationJSONObject?: GetUsersId404ApplicationJson;
}
