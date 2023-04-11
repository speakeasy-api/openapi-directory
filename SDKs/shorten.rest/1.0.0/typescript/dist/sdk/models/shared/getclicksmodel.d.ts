import { SpeakeasyBase } from "../../../internal/utils";
import { ClickModel } from "./clickmodel";
/**
 * returns Array of Click models, also returns lastId
 */
export declare class GetClicksModel extends SpeakeasyBase {
    clicks?: ClickModel[];
    lastId?: string;
}
