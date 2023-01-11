import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddImageCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddImageCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class AddImageCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddImageCollectionItemsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionItemRequest;

  @SpeakeasyMetadata()
  security: AddImageCollectionItemsSecurity;
}


export class AddImageCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
