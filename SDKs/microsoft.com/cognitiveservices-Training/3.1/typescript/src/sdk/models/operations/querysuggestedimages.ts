import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QuerySuggestedImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class QuerySuggestedImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId: string;
}


export class QuerySuggestedImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class QuerySuggestedImagesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  suggestedTagAndRegionQueryToken?: shared.SuggestedTagAndRegionQueryToken;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  suggestedTagAndRegionQueryToken1?: shared.SuggestedTagAndRegionQueryToken;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class QuerySuggestedImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuerySuggestedImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: QuerySuggestedImagesQueryParams;

  @SpeakeasyMetadata()
  headers: QuerySuggestedImagesHeaders;

  @SpeakeasyMetadata()
  request: QuerySuggestedImagesRequests;
}


export class QuerySuggestedImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  suggestedTagAndRegionQuery?: shared.SuggestedTagAndRegionQuery;
}
