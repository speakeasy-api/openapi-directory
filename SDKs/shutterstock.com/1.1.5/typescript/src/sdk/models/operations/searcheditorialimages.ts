import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchEditorialImagesSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}


export class SearchEditorialImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchEditorialImagesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supplier_code" })
  supplierCode?: string[];
}


export class SearchEditorialImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class SearchEditorialImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchEditorialImagesQueryParams;

  @SpeakeasyMetadata()
  security: SearchEditorialImagesSecurity;
}


export class SearchEditorialImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialSearchResults?: shared.EditorialSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
