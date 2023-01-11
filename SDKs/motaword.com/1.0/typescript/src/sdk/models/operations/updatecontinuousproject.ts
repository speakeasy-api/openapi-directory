import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateContinuousProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateContinuousProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateContinuousProjectPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ContinuousProjectUpdateContent;
}


export class UpdateContinuousProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  continuousProject?: shared.ContinuousProject;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
