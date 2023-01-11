import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errorId?: number;

  @SpeakeasyMetadata()
  errorMessage?: string;

  @SpeakeasyMetadata()
  errorName?: string;
}
