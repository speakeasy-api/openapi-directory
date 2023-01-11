import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SendAnSmsFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class SendAnSmsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SendAnSmsFormatEnum;
}


export class SendAnSmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendAnSmsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: any;
}


export class SendAnSmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendAnSms200ApplicationJSONOneOf?: any;
}
