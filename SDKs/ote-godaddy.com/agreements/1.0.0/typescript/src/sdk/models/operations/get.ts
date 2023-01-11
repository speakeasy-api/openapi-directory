import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keys" })
  keys: string[];
}


export class GetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Market-Id" })
  xMarketId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Private-Label-Id" })
  xPrivateLabelId?: number;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryParams;

  @SpeakeasyMetadata()
  headers: GetHeaders;
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
  legalAgreements?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
