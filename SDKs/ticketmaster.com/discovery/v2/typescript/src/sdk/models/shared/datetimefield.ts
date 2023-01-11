import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationField } from "./durationfield";
import { DateTimeFieldType } from "./datetimefieldtype";



export class DateTimeField extends SpeakeasyBase {
  @SpeakeasyMetadata()
  durationField?: DurationField;

  @SpeakeasyMetadata()
  leapDurationField?: DurationField;

  @SpeakeasyMetadata()
  lenient?: boolean;

  @SpeakeasyMetadata()
  maximumValue?: number;

  @SpeakeasyMetadata()
  minimumValue?: number;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  rangeDurationField?: DurationField;

  @SpeakeasyMetadata()
  supported?: boolean;

  @SpeakeasyMetadata()
  type?: DateTimeFieldType;
}
