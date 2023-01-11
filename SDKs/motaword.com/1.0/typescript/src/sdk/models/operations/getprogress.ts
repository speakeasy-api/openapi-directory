import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProgressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class GetProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProgressPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProgressQueryParams;
}


export class GetProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  progress?: shared.Progress;

  @SpeakeasyMetadata()
  statusCode: number;
}
