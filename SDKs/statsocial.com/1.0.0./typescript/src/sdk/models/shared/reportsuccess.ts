import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportResponse } from "./reportresponse";



export class ReportSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ReportResponse;

  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}
