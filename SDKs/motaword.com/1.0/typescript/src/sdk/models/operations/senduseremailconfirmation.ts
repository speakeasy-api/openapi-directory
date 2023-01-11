import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendUserEmailConfirmationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class SendUserEmailConfirmationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}

export enum SendUserEmailConfirmation200ApplicationJsonStatusEnum {
    Success = "success"
}


export class SendUserEmailConfirmation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SendUserEmailConfirmation200ApplicationJsonStatusEnum;
}

export enum SendUserEmailConfirmation202ApplicationJsonStatusEnum {
    AlreadyConfirmed = "already_confirmed"
}


export class SendUserEmailConfirmation202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SendUserEmailConfirmation202ApplicationJsonStatusEnum;
}


export class SendUserEmailConfirmationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendUserEmailConfirmationPathParams;

  @SpeakeasyMetadata()
  security: SendUserEmailConfirmationSecurity;
}


export class SendUserEmailConfirmationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendUserEmailConfirmation200ApplicationJSONObject?: SendUserEmailConfirmation200ApplicationJson;

  @SpeakeasyMetadata()
  sendUserEmailConfirmation202ApplicationJSONObject?: SendUserEmailConfirmation202ApplicationJson;
}
