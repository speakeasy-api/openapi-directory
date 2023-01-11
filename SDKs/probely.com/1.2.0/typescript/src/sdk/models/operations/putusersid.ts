import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutUsersIdRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: shared.UserTitleEnum;
}


export class PutUsersId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutUsersId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutUsersId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutUsersId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutUsersIdRequestBodyInput;
}


export class PutUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;

  @SpeakeasyMetadata()
  putUsersId400ApplicationJSONObject?: PutUsersId400ApplicationJson;

  @SpeakeasyMetadata()
  putUsersId401ApplicationJSONObject?: PutUsersId401ApplicationJson;

  @SpeakeasyMetadata()
  putUsersId403ApplicationJSONObject?: PutUsersId403ApplicationJson;

  @SpeakeasyMetadata()
  putUsersId404ApplicationJSONObject?: PutUsersId404ApplicationJson;
}
