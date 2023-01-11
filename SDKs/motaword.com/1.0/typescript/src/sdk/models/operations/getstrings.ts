import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStringsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source_language" })
  sourceLanguage?: string;
}


export class GetStringsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStringsQueryParams;
}


export class GetStringsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientStrings?: shared.ClientStrings;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
