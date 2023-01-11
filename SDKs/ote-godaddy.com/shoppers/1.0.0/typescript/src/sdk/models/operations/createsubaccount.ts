import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSubaccountRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  subaccountCreate?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class CreateSubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: CreateSubaccountRequests;
}


export class CreateSubaccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  shopperId?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
