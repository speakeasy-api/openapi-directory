import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TooManyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=spam_warning_urn" })
  spamWarningUrn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
