import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostProfileChangePasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confpassword" })
  confpassword: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=current_password" })
  currentPassword: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: Record<string, any>;
}


export class PostProfileChangePassword200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostProfileChangePassword400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostProfileChangePassword401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostProfileChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostProfileChangePasswordRequestBody;
}


export class PostProfileChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postProfileChangePassword200ApplicationJSONObject?: PostProfileChangePassword200ApplicationJson;

  @SpeakeasyMetadata()
  postProfileChangePassword400ApplicationJSONObject?: PostProfileChangePassword400ApplicationJson;

  @SpeakeasyMetadata()
  postProfileChangePassword401ApplicationJSONObject?: PostProfileChangePassword401ApplicationJson;
}
