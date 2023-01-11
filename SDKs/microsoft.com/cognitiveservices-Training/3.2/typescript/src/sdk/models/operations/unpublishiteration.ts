import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnpublishIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class UnpublishIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnpublishIterationPathParams;
}


export class UnpublishIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
