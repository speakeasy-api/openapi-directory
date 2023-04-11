import { SpeakeasyBase } from "../../../internal/utils";
import { DfsSlatePlayerOwnershipProjection } from "./dfsslateplayerownershipprojection";
export declare class DfsSlateWithOwnershipProjection extends SpeakeasyBase {
    operator?: string;
    operatorDay?: string;
    operatorName?: string;
    operatorSlateID?: number;
    operatorStartTime?: string;
    slateID?: number;
    slateOwnershipProjections?: DfsSlatePlayerOwnershipProjection[];
}
