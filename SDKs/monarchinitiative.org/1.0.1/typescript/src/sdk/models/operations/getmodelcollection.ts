import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
