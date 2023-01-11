import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthFailedErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  title?: string;
}


export class AuthFailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AuthFailedErrors })
  errors?: AuthFailedErrors[];
}
