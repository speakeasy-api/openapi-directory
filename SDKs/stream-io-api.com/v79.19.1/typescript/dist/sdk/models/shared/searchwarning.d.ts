import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchWarning extends SpeakeasyBase {
    /**
     * Channel CIDs for the searched channels
     */
    channelSearchCids?: string[];
    /**
     * Number of channels searched
     */
    channelSearchCount?: number;
    /**
     * Code corresponding to the warning
     */
    warningCode: number;
    /**
     * Description of the warning
     */
    warningDescription: string;
}
