import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberAdditionalDataExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.VersionNumberEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberAdditionalDataExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometries" })
  geometries: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometriesZoom" })
  geometriesZoom?: number;
}


export class GetSearchVersionNumberAdditionalDataExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberAdditionalDataExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberAdditionalDataExtQueryParams;
}


export class GetSearchVersionNumberAdditionalDataExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
