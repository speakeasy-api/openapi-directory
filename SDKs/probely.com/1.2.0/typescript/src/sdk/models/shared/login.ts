import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Login extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
