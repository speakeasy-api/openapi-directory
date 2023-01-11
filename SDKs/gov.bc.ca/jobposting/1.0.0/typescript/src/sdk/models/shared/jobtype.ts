import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;
}
