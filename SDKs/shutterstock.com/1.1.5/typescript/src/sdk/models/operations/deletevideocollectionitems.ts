import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteVideoCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_id" })
  itemId?: string[];
}


export class DeleteVideoCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class DeleteVideoCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteVideoCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: DeleteVideoCollectionItemsSecurity;
}


export class DeleteVideoCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
