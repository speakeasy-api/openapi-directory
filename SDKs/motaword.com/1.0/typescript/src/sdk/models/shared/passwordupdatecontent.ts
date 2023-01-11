import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PasswordUpdateContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
