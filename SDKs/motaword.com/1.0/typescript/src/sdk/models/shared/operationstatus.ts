import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnumEnum } from "./operationstatusenumenum";



export class OperationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnumEnum;
}
