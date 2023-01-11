import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";



export class CommissionStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: Monetary;

  @SpeakeasyMetadata({ data: "json, name=paid" })
  paid?: Monetary;

  @SpeakeasyMetadata({ data: "json, name=quote_total" })
  quoteTotal?: Monetary;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: Monetary;
}
