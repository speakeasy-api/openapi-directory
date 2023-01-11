import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTrackCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteTrackCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_id" })
  itemId?: string[];
}


export class DeleteTrackCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class DeleteTrackCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTrackCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteTrackCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: DeleteTrackCollectionItemsSecurity;
}


export class DeleteTrackCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
