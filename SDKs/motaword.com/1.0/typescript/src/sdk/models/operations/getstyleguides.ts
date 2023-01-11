import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStyleGuidesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}

export enum GetStyleGuidesWithEnum {
    Preview = "preview"
}


export class GetStyleGuidesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetStyleGuidesWithEnum[];
}


export class GetStyleGuidesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStyleGuidesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStyleGuidesQueryParams;
}


export class GetStyleGuidesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  styleGuideList?: shared.StyleGuideList;
}
