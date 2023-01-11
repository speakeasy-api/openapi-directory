import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shopperId" })
  shopperId: string;
}


export class DeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditClientIp" })
  auditClientIp: string;
}


export class DeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteQueryParams;
}


export class DeleteResponse extends SpeakeasyBase {
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
