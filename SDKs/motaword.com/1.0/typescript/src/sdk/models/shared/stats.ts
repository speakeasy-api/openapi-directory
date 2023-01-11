import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientStats } from "./clientstats";
import { VendorStats } from "./vendorstats";



export class Stats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: ClientStats;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: VendorStats;
}
