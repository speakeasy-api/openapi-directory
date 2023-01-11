import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ListSortEnum {
    ExpiresAt = "expiresAt",
    MinusExpiresAt = "-expiresAt"
}


export class ListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includes" })
  includes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=productGroupKeys" })
  productGroupKeys?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListSortEnum;
}


export class ListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Market-Id" })
  xMarketId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Shopper-Id" })
  xShopperId?: string;
}


export class ListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListQueryParams;

  @SpeakeasyMetadata()
  headers: ListHeaders;
}


export class ListResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata()
  subscriptionList?: any;
}
