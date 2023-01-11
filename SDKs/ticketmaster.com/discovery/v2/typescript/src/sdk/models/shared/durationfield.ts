import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationFieldType } from "./durationfieldtype";



export class DurationField extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  precise?: boolean;

  @SpeakeasyMetadata()
  supported?: boolean;

  @SpeakeasyMetadata()
  type?: DurationFieldType;

  @SpeakeasyMetadata()
  unitMillis?: number;
}
