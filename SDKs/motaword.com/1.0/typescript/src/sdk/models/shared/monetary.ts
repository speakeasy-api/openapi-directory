import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Monetary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}
