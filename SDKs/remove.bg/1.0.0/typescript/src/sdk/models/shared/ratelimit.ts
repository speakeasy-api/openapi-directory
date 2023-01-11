import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RateLimitErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  title?: string;
}


export class RateLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RateLimitErrors })
  errors?: RateLimitErrors[];
}
