import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Responsivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invited" })
  invited?: number;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: string;

  @SpeakeasyMetadata({ data: "json, name=notEntered" })
  notEntered?: number;

  @SpeakeasyMetadata({ data: "json, name=onlyEntered" })
  onlyEntered?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: string;

  @SpeakeasyMetadata({ data: "json, name=worked" })
  worked?: number;
}
