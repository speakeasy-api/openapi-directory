import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchEditorialVideosResolutionEnum {
    Fourk = "4k",
    HighDefinition = "high_definition",
    StandardDefinition = "standard_definition"
}

export enum SearchEditorialVideosSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}


export class SearchEditorialVideosQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fps" })
  fps?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: SearchEditorialVideosResolutionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchEditorialVideosSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supplier_code" })
  supplierCode?: string[];
}


export class SearchEditorialVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class SearchEditorialVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchEditorialVideosQueryParams;

  @SpeakeasyMetadata()
  security: SearchEditorialVideosSecurity;
}


export class SearchEditorialVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialVideoSearchResults?: shared.EditorialVideoSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
