import { SpeakeasyBase } from "../../../internal/utils";
import { PretargetingConfig } from "./pretargetingconfig";
/**
 * Successful response
 */
export declare class PretargetingConfigList extends SpeakeasyBase {
    /**
     * A list of pretargeting configs
     */
    items?: PretargetingConfig[];
    /**
     * Resource type.
     */
    kind?: string;
}
