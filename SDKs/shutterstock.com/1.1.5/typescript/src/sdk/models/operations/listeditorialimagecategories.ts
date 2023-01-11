import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListEditorialImageCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class ListEditorialImageCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListEditorialImageCategoriesSecurity;
}


export class ListEditorialImageCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialImageCategoryResults?: shared.EditorialImageCategoryResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
