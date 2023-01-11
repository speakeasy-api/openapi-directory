import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListEditorialVideoCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class ListEditorialVideoCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListEditorialVideoCategoriesSecurity;
}


export class ListEditorialVideoCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialVideoCategoryResults?: shared.EditorialVideoCategoryResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
