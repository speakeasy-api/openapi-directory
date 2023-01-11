import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddTrackCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddTrackCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class AddTrackCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddTrackCollectionItemsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionItemRequest;

  @SpeakeasyMetadata()
  security: AddTrackCollectionItemsSecurity;
}


export class AddTrackCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
