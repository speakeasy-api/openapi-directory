import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
