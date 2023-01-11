import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteListingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=domains" })
  domains: string[];
}


export class DeleteListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteListingsQueryParams;
}


export class DeleteListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aftermarketListingAction?: any;

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
