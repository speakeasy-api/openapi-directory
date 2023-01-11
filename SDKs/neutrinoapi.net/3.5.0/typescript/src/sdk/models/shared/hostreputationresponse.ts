import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Blacklist } from "./blacklist";



export class HostReputationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=isListed" })
  isListed: boolean;

  @SpeakeasyMetadata({ data: "json, name=listCount" })
  listCount: number;

  @SpeakeasyMetadata({ data: "json, name=lists", elemType: Blacklist })
  lists: Blacklist[];
}
