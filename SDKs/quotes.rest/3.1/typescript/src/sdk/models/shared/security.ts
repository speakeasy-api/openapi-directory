import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeXTheySaidSoApiSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-TheySaidSo-Api-Secret" })
  apiKey: string;
}
