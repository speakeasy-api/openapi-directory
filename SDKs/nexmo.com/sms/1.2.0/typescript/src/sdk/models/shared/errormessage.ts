import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-text" })
  errorText?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
