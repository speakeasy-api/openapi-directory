import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SendEmailConfirmation200ApplicationJsonStatusEnum {
    Success = "success",
    AlreadyConfirmed = "already_confirmed"
}


export class SendEmailConfirmation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SendEmailConfirmation200ApplicationJsonStatusEnum;
}


export class SendEmailConfirmationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendEmailConfirmation200ApplicationJSONObject?: SendEmailConfirmation200ApplicationJson;
}
