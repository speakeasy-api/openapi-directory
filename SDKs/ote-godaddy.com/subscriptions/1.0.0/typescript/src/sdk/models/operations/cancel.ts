import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class CancelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Shopper-Id" })
  xShopperId?: string;
}


export class CancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelPathParams;

  @SpeakeasyMetadata()
  headers: CancelHeaders;
}


export class CancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
