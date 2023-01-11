import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksMeta } from "./linksmeta";
import { Responsivity } from "./responsivity";



export class ResponsivityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: LinksMeta;

  @SpeakeasyMetadata({ data: "json, name=responsivity", elemType: Responsivity })
  responsivity?: Responsivity[];
}
