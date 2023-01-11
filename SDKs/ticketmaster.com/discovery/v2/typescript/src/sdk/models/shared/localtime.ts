import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Chronology } from "./chronology";
import { DateTimeFieldType } from "./datetimefieldtype";
import { DateTimeField } from "./datetimefield";



export class LocalTime extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chronology?: Chronology;

  @SpeakeasyMetadata({ elemType: DateTimeFieldType })
  fieldTypes?: DateTimeFieldType[];

  @SpeakeasyMetadata({ elemType: DateTimeField })
  fields?: DateTimeField[];

  @SpeakeasyMetadata()
  hourOfDay?: number;

  @SpeakeasyMetadata()
  millisOfDay?: number;

  @SpeakeasyMetadata()
  millisOfSecond?: number;

  @SpeakeasyMetadata()
  minuteOfHour?: number;

  @SpeakeasyMetadata()
  secondOfMinute?: number;

  @SpeakeasyMetadata()
  values?: number[];
}
