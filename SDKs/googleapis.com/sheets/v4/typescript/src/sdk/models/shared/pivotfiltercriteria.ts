import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";



export class PivotFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @SpeakeasyMetadata({ data: "json, name=visibleByDefault" })
  visibleByDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visibleValues" })
  visibleValues?: string[];
}
