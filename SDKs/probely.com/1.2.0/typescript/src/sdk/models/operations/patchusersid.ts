import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchUsersIdRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: shared.UserTitleEnum;
}


export class PatchUsersId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchUsersId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchUsersId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchUsersId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUsersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchUsersIdRequestBodyInput;
}


export class PatchUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;

  @SpeakeasyMetadata()
  patchUsersId400ApplicationJSONObject?: PatchUsersId400ApplicationJson;

  @SpeakeasyMetadata()
  patchUsersId401ApplicationJSONObject?: PatchUsersId401ApplicationJson;

  @SpeakeasyMetadata()
  patchUsersId403ApplicationJSONObject?: PatchUsersId403ApplicationJson;

  @SpeakeasyMetadata()
  patchUsersId404ApplicationJSONObject?: PatchUsersId404ApplicationJson;
}
