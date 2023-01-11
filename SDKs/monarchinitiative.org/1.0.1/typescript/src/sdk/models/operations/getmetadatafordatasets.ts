import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMetadataForDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
