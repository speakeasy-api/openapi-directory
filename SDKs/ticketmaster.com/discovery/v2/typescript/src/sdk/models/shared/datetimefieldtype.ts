import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationFieldType } from "./durationfieldtype";



export class DateTimeFieldType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  durationType?: DurationFieldType;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  rangeDurationType?: DurationFieldType;
}
