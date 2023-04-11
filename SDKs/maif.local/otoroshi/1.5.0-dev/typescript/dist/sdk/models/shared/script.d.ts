import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A script to transformer otoroshi requests
 */
export declare class Script extends SpeakeasyBase {
    /**
     * The code of the script
     */
    code: Record<string, string>;
    /**
     * The description of the script
     */
    desc: Record<string, string>;
    /**
     * The id of the script
     */
    id: string;
    /**
     * The name of the script
     */
    name: string;
}
