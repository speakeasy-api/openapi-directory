import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIterationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIterationsPathParams;
}


export class GetIterationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata({ elemType: shared.Iteration })
  iterations?: shared.Iteration[];

  @SpeakeasyMetadata()
  statusCode: number;
}
