import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchEverywhereIncludeEnum {
    Projects = "projects",
    Documents = "documents",
    Strings = "strings"
}


export class SearchEverywhereQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include[]" })
  include?: SearchEverywhereIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchEverywhereRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchEverywhereQueryParams;
}


export class SearchEverywhereResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchEverywhereResult?: shared.SearchEverywhereResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
