import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReferencesReferencesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_hint" })
  apiHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_above" })
  pageAbove?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_below" })
  pageBelow?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_cursor" })
  pageCursor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_limit" })
  pageLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_offset" })
  pageOffset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=response_fields" })
  responseFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=response_format" })
  responseFormat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetReferencesReferencesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReferencesReferencesGetQueryParams;
}


export class GetReferencesReferencesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  referenceResponseMany?: shared.ReferenceResponseMany;

  @SpeakeasyMetadata()
  statusCode: number;
}
