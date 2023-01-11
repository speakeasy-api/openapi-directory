import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiError" })
  apiError: number;

  @SpeakeasyMetadata({ data: "json, name=apiErrorMsg" })
  apiErrorMsg: string;
}
