import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Market-Id" })
  xMarketId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Shopper-Id" })
  xShopperId?: string;
}


export class ProductGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ProductGroupsHeaders;
}


export class ProductGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  productGroups?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
