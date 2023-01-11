import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSingleStructureStructuresEntryIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entry_id" })
  entryId: string;
}


export class GetSingleStructureStructuresEntryIdGetQueryParams extends SpeakeasyBase {
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


export class GetSingleStructureStructuresEntryIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSingleStructureStructuresEntryIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSingleStructureStructuresEntryIdGetQueryParams;
}


export class GetSingleStructureStructuresEntryIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  structureResponseOne?: shared.StructureResponseOne;
}
