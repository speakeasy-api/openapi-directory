import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shopperId" })
  shopperId: string;
}


export class GetStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditClientIp" })
  auditClientIp: string;
}


export class GetStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStatusQueryParams;
}


export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  shopperStatus?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
