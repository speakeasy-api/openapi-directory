import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListVideoCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;
}


export class ListVideoCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class ListVideoCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListVideoCategoriesQueryParams;

  @SpeakeasyMetadata()
  security: ListVideoCategoriesSecurity;
}


export class ListVideoCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
