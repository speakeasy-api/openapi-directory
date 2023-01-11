import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmailValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=domainError" })
  domainError: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=isDisposable" })
  isDisposable: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFreemail" })
  isFreemail: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPersonal" })
  isPersonal: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=syntaxError" })
  syntaxError: boolean;

  @SpeakeasyMetadata({ data: "json, name=typosFixed" })
  typosFixed: boolean;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
