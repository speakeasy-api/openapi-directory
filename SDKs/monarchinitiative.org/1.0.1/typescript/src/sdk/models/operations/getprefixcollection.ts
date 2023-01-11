import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPrefixCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
