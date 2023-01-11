import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
