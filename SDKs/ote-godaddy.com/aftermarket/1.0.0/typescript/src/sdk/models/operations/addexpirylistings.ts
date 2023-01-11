import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddExpiryListingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  aftermarketListingExpiryCreates?: any[];

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class AddExpiryListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AddExpiryListingsRequests;
}


export class AddExpiryListingsResponse extends SpeakeasyBase {
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
