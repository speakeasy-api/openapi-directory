import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Href extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
