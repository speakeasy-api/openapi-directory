import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteImageCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteImageCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_id" })
  itemId?: string[];
}


export class DeleteImageCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class DeleteImageCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImageCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteImageCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: DeleteImageCollectionItemsSecurity;
}


export class DeleteImageCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
