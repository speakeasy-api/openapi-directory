import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncOperationStatusEnumEnum } from "./asyncoperationstatusenumenum";



export class AsyncOperationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AsyncOperationStatusEnumEnum;
}
