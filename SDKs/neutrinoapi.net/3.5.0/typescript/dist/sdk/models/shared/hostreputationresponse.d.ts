import { SpeakeasyBase } from "../../../internal/utils";
import { Blacklist } from "./blacklist";
export declare class HostReputationResponse extends SpeakeasyBase {
    host: string;
    isListed: boolean;
    listCount: number;
    lists: Blacklist[];
}
