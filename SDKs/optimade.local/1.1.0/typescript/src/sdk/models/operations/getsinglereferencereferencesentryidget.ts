import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSingleReferenceReferencesEntryIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entry_id" })
  entryId: string;
}


export class GetSingleReferenceReferencesEntryIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_hint" })
  apiHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=response_fields" })
  responseFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=response_format" })
  responseFormat?: string;
}


export class GetSingleReferenceReferencesEntryIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSingleReferenceReferencesEntryIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSingleReferenceReferencesEntryIdGetQueryParams;
}


export class GetSingleReferenceReferencesEntryIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  referenceResponseOne?: shared.ReferenceResponseOne;

  @SpeakeasyMetadata()
  statusCode: number;
}
