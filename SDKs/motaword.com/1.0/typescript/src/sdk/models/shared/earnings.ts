import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EarningWithTqs } from "./earningwithtqs";



export class Earnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed", elemType: EarningWithTqs })
  completed?: EarningWithTqs[];

  @SpeakeasyMetadata({ data: "json, name=ongoing", elemType: EarningWithTqs })
  ongoing?: EarningWithTqs[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
