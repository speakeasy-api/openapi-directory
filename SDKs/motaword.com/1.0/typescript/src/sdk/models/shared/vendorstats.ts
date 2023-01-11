import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VendorEarningStats } from "./vendorearningstats";
import { VendorProjectStats } from "./vendorprojectstats";
import { VendorWordStats } from "./vendorwordstats";



export class VendorStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=earnings" })
  earnings?: VendorEarningStats;

  @SpeakeasyMetadata({ data: "json, name=projects" })
  projects?: VendorProjectStats;

  @SpeakeasyMetadata({ data: "json, name=words" })
  words?: VendorWordStats;
}
