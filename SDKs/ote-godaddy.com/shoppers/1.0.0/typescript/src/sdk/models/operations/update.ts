import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shopperId" })
  shopperId: string;
}


export class UpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  shopperUpdate?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class UpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePathParams;

  @SpeakeasyMetadata()
  request: UpdateRequests;
}


export class UpdateResponse extends SpeakeasyBase {
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
