import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDpsJobProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetDpsJobProgressHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetDpsJobProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDpsJobProgressPathParams;

  @SpeakeasyMetadata()
  headers: GetDpsJobProgressHeaders;
}


export class GetDpsJobProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
