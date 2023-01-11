import { SpeakeasyBase } from "../../../internal/utils";
import { ClientStats } from "./clientstats";
import { VendorStats } from "./vendorstats";
export declare class Stats extends SpeakeasyBase {
    client?: ClientStats;
    vendor?: VendorStats;
}
