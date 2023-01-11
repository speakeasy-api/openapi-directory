import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ListSortEnum {
    CreatedAt = "createdAt",
    MinusCreatedAt = "-createdAt",
    OrderId = "orderId",
    MinusOrderId = "-orderId",
    PricingTotal = "pricing.total",
    MinusPricingTotal = "-pricing.total"
}


export class ListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentOrderId" })
  parentOrderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentProfileId" })
  paymentProfileId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodEnd" })
  periodEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodStart" })
  periodStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productGroupId" })
  productGroupId?: number;

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
  orderList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
