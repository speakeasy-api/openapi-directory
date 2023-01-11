import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStyleGuidePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=styleGuideId" })
  styleGuideId: number;
}

export enum GetStyleGuideWithEnum {
    Preview = "preview"
}


export class GetStyleGuideQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetStyleGuideWithEnum[];
}


export class GetStyleGuideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStyleGuidePathParams;

  @SpeakeasyMetadata()
  queryParams: GetStyleGuideQueryParams;
}


export class GetStyleGuideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  styleGuide?: shared.StyleGuide;
}
