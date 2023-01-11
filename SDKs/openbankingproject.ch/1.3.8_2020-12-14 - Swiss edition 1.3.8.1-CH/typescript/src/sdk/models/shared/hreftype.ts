import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HrefType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
