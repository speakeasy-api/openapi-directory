import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dispatch_uuid" })
  dispatchUuid: string;
}
