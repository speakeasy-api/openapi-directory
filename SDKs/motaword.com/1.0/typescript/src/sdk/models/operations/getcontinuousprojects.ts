import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContinuousProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  continuousProjectsList?: shared.ContinuousProjectsList;

  @SpeakeasyMetadata()
  statusCode: number;
}
