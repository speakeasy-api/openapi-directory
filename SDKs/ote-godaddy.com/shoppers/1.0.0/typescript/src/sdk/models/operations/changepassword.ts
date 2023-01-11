import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangePasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shopperId" })
  shopperId: string;
}


export class ChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangePasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  passwordError?: any;

  @SpeakeasyMetadata()
  shopperId?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
