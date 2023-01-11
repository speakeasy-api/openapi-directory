import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorLimit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  fields?: any[];

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  retryAfterSec: number;
}
