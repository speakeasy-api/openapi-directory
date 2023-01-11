import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompactAssociationSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objects" })
  objects: string[];

  @SpeakeasyMetadata({ data: "json, name=relation" })
  relation: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}
