import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnpublishIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class UnpublishIterationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UnpublishIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnpublishIterationPathParams;

  @SpeakeasyMetadata()
  headers: UnpublishIterationHeaders;
}


export class UnpublishIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
