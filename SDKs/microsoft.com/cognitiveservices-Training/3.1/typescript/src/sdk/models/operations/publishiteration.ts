import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PublishIterationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predictionId" })
  predictionId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publishName" })
  publishName: string;
}


export class PublishIterationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class PublishIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishIterationPathParams;

  @SpeakeasyMetadata()
  queryParams: PublishIterationQueryParams;

  @SpeakeasyMetadata()
  headers: PublishIterationHeaders;
}


export class PublishIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  publishIteration200ApplicationJSONBoolean?: boolean;

  @SpeakeasyMetadata()
  statusCode: number;
}
