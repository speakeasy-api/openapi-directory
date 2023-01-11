import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DateTimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fixed?: boolean;

  @SpeakeasyMetadata()
  id?: string;
}
