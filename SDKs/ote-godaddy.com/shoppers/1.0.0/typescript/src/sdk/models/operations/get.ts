import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shopperId" })
  shopperId: string;
}

export enum GetIncludesEnum {
    CustomerId = "customerId"
}


export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includes" })
  includes?: GetIncludesEnum[];
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryParams;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  shopper?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
