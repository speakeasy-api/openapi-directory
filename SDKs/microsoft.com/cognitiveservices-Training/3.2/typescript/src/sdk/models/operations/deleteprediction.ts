import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePredictionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeletePredictionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: string[];
}


export class DeletePredictionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePredictionPathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePredictionQueryParams;
}


export class DeletePredictionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
