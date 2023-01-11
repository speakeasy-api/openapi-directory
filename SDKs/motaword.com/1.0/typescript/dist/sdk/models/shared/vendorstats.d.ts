import { SpeakeasyBase } from "../../../internal/utils";
import { VendorEarningStats } from "./vendorearningstats";
import { VendorProjectStats } from "./vendorprojectstats";
import { VendorWordStats } from "./vendorwordstats";
export declare class VendorStats extends SpeakeasyBase {
    earnings?: VendorEarningStats;
    projects?: VendorProjectStats;
    words?: VendorWordStats;
}
