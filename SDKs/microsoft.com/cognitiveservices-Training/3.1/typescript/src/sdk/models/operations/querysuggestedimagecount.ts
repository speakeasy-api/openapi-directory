import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QuerySuggestedImageCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class QuerySuggestedImageCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId: string;
}


export class QuerySuggestedImageCountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class QuerySuggestedImageCountRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tagFilter?: shared.TagFilter;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  tagFilter1?: shared.TagFilter;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class QuerySuggestedImageCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuerySuggestedImageCountPathParams;

  @SpeakeasyMetadata()
  queryParams: QuerySuggestedImageCountQueryParams;

  @SpeakeasyMetadata()
  headers: QuerySuggestedImageCountHeaders;

  @SpeakeasyMetadata()
  request: QuerySuggestedImageCountRequests;
}


export class QuerySuggestedImageCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  querySuggestedImageCount200ApplicationJSONObject?: Record<string, number>;

  @SpeakeasyMetadata()
  statusCode: number;
}
