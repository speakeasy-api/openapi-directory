import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScanforNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scanforNetworks200TextPlainObject?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
