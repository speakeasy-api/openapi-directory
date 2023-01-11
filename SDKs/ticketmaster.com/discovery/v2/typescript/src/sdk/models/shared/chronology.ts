import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateTimeZone } from "./datetimezone";



export class Chronology extends SpeakeasyBase {
  @SpeakeasyMetadata()
  zone?: DateTimeZone;
}
