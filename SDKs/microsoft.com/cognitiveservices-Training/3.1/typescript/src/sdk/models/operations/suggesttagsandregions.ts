import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuggestTagsAndRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class SuggestTagsAndRegionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId: string;
}


export class SuggestTagsAndRegionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class SuggestTagsAndRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuggestTagsAndRegionsPathParams;

  @SpeakeasyMetadata()
  queryParams: SuggestTagsAndRegionsQueryParams;

  @SpeakeasyMetadata()
  headers: SuggestTagsAndRegionsHeaders;
}


export class SuggestTagsAndRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SuggestedTagAndRegion })
  suggestedTagAndRegions?: shared.SuggestedTagAndRegion[];
}
