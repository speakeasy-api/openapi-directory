import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message: string;

  @SpeakeasyMetadata()
  status: number;
}
